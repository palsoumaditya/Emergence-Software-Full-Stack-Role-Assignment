"""
FastAPI backend for the portfolio AI chat.
Provides endpoints for chat interaction and history retrieval.
"""

import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uuid
from dotenv import load_dotenv

load_dotenv()

from database import init_db, save_message, get_chat_history
from chat_engine import get_ai_response


# --- Lifespan ---
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize database on startup."""
    await init_db()
    yield


# --- App Setup ---
app = FastAPI(
    title="Soumaditya Portfolio Chat API",
    description="AI-powered chat backend for Soumaditya Pal's portfolio website",
    version="1.0.0",
    lifespan=lifespan,
)

allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://emergence-software-full-stack-role.vercel.app",
]

# Clean environment variable URL and add to allowed origins
frontend_url = os.getenv("FRONTEND_URL", "").strip().rstrip("/")
if frontend_url and frontend_url not in allowed_origins:
    allowed_origins.append(frontend_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    # Allow any subdomain on vercel.app for this project (useful for preview deployments)
    allow_origin_regex=r"https://emergence-software-full-stack-role.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Request/Response Models ---
class ChatRequest(BaseModel):
    message: str
    session_id: str | None = None


class ChatResponse(BaseModel):
    response: str
    session_id: str


class HistoryResponse(BaseModel):
    messages: list[dict]
    session_id: str


# --- Endpoints ---
@app.get("/api/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy", "service": "portfolio-chat-api"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Process a chat message and return an AI response."""
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    # Generate or use existing session ID
    session_id = request.session_id or str(uuid.uuid4())

    # Get chat history for context
    history = await get_chat_history(session_id)

    # Save the user message
    await save_message(session_id, "user", request.message.strip())

    # Get AI response
    ai_response = await get_ai_response(request.message.strip(), history)

    # Save the assistant response
    await save_message(session_id, "assistant", ai_response)

    return ChatResponse(response=ai_response, session_id=session_id)


@app.get("/api/chat/history/{session_id}", response_model=HistoryResponse)
async def chat_history(session_id: str):
    """Retrieve chat history for a given session."""
    history = await get_chat_history(session_id)
    return HistoryResponse(messages=history, session_id=session_id)
