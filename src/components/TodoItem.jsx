import { useState } from 'react';

function TodoItem({ task, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleEditSubmit = (e) => {
        if (e.key === 'Enter' || e.type === 'blur') {
            if (editText.trim()) onEdit(task.id, editText.trim());
            setIsEditing(false);
        }
        if (e.key === 'Escape') {
            setEditText(task.text);
            setIsEditing(false);
        }
    };

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            {isEditing ? (
                <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleEditSubmit}
                    onBlur={handleEditSubmit}
                    autoFocus
                />
            ) : (
                <span
                    className={`todo-text ${task.completed ? 'done' : ''}`}
                    onDoubleClick={handleDoubleClick}
                    title="Двойной клик для редактирования"
                >
                    {task.text}
                </span>
            )}
            <button className="delete-btn" onClick={() => onDelete(task.id)}>✕</button>
        </li>
    );
}

export default TodoItem;
