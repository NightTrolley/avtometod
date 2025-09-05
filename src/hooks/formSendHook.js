import axios from "axios";

export const sendFormData = async (data) => {
    data = {...data, ...JSON.parse(localStorage.getItem('utms') || '{}')}
    const url = "https://webjack.ru/webhooks/http/fc7e2081aeb840798f4b97783b5f1526/";

    try {
        const response = await axios.post(
            url,
            data,
        );
        console.log("Отправленные данные", data)
        console.log("Успешный ответ:", response);
        return response.data;
    } catch (e) {
        console.error("Ошибка отправки:", e);
        if (e.response) {
            console.error("Данные ошибки:", e.response.data);
            console.error("Статус ошибки:", e.response.status);
        }
        throw e;
    }
};