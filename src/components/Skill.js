const Skill = ({ name, children }) => {
    return (
        <div className="skill">
            <div className="skill-icon">
                {children}
            </div>
            {name}
        </div>
    );
};

export default Skill;