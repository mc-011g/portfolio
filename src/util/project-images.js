const ProjectImages = (id) => {

    const ecommerceImages = [
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-home.png", alt: "Ecommerce app home page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-all-products.png", alt: "Ecommerce app all products page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-category-athletic.png", alt: "Ecommerce app athletic category products page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-product.png", alt: "Ecommerce app product page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-product-added.png", alt: "Ecommerce app product added page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-cart.png", alt: "Ecommerce app cart page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-login.png", alt: "Ecommerce app login page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-register.png", alt: "Ecommerce app register page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-verify-email.png", alt: "Ecommerce app verify email" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/ecommerce-profile.png", alt: "Ecommerce app profile page" },
    ]

    const inventoryImages = [
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-categories.png", alt: "Inventory app categories" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-create-product.png", alt: "Inventory app create product modal" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-dashboard.png", alt: "Inventory app dashboard" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-edit-order.png", alt: "Inventory app edit order modal" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-login.png", alt: "Inventory app login page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-orders.png", alt: "Inventory app orders page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-products.png", alt: "Inventory app products page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-profile.png", alt: "Inventory app user profile page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/inventory-register.png", alt: "Inventory app register page" }
    ]

    const chatAppImages = [
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/real-time-chat-app.png", alt: "Chat app chat page" },
        { imgLink: "https://reactecommerceapp.blob.core.windows.net/images/chat-app-participants.png", alt: "Chat app group participants" }
    ]

    if (id === 'ecommerceApp') {
        return ecommerceImages;
    } else if (id === 'inventoryApp') {
        return inventoryImages;
    } else if (id === 'chatApp') {
        return chatAppImages;
    } else {
        return [];
    }
}

export default ProjectImages;