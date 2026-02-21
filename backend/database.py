"""
SQLite database module for persisting chat conversations.
Uses aiosqlite for async operations compatible with FastAPI.
"""

import aiosqlite
import os
from datetime import datetime, timezone

DB_PATH = os.path.join(os.path.dirname(__file__), "chat_history.db")


async def init_db():
    """Initialize the database and create tables if they don't exist."""
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute("""
            CREATE TABLE IF NOT EXISTS chat_messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT NOT NULL,
                role TEXT NOT NULL CHECK(role IN ('user', 'assistant')),
                content TEXT NOT NULL,
                timestamp TEXT NOT NULL
            )
        """)
        await db.execute("""
            CREATE INDEX IF NOT EXISTS idx_session_id 
            ON chat_messages(session_id)
        """)
        await db.commit()


async def save_message(session_id: str, role: str, content: str):
    """Save a chat message to the database."""
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute(
            """INSERT INTO chat_messages (session_id, role, content, timestamp) 
               VALUES (?, ?, ?, ?)""",
            (session_id, role, content, datetime.now(timezone.utc).isoformat()),
        )
        await db.commit()


async def get_chat_history(session_id: str, limit: int = 20):
    """Retrieve recent chat history for a session."""
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        cursor = await db.execute(
            """SELECT role, content, timestamp 
               FROM chat_messages 
               WHERE session_id = ? 
               ORDER BY id DESC 
               LIMIT ?""",
            (session_id, limit),
        )
        rows = await cursor.fetchall()
        # Reverse so oldest first
        return [
            {"role": row["role"], "content": row["content"], "timestamp": row["timestamp"]}
            for row in reversed(rows)
        ]
