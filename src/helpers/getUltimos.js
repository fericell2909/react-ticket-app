
export const getUltimos = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL_SOCKET}/ultimos`);
    const data = await response.json();

    return data;
}