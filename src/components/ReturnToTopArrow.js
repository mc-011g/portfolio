const ReturnToTopArrow = ({ returnToTop }) => {
    return (
        <div className="back-to-top" onClick={returnToTop}>
            <i className="bi bi-arrow-up-circle-fill d-flex"></i>
        </div>
    );
};

export default ReturnToTopArrow;