import { deleteIcon } from 'react-icons/md';

const Notes = () => {
    return (
        <div className="note">
            <span>Notes Test</span>
            <div className="notes-footer">
                <small>19/02/2024</small>
                <deleteIcon className="delete-icon" size="1em"/>
            </div>
        </div>
    );
};

export default Notes;