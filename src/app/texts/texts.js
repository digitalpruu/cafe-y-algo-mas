const title = "Café y algo más";
const email = "francorosaevelia@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en tus productos de ${title} y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "3107736034";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "\n" +
            "En Café y Algo Más, nos dedicamos a ofrecer una experiencia única donde el café se encuentra con lo mejor de la pastelería. Desde un café recién hecho hasta capuchinos cremosos y una variedad de deliciosos postres, estamos aquí para deleitar tus sentidos. Nuestro menú está cuidadosamente diseñado para combinar la calidad del café con una selección de tostadas, mantecados, postres y colaciones que complementan a la perfección cada taza de café. Utilizamos ingredientes frescos y técnicas tradicionales para garantizar un sabor excepcional en cada bocado.\n" +
            "\n" +
            "En Café y Algo Más, creemos que cada visita debe ser especial, por lo que nos esforzamos por ofrecer un ambiente cálido y acogedor, ideal para disfrutar de un buen café y compañía. Nuestro objetivo es que cada cliente se sienta como en casa y disfrute de un momento de placer. Si buscas un lugar donde el café y la pastelería se combinan de manera perfecta, ven a Café y Algo Más. ¡El lugar donde el café se encuentra con lo mejor de la pastelería!",
        description2: ""
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan:{
            p1: "Café que reconforta, ",
            p2: "pastelería que deleita."
        },
        address: email,
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/cafe.y.algo.mas.2024?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },

};
export default textos;
