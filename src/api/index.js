import ajax from "./ajax";

export const getTimuList = (page) => ajax("api/rtimu", { params: { page } });
