import useHttp from "./useHttp";


const useBookApi = () => {

    const {request,process} = useHttp();

    const getBySearch = (search,params) => {
        const url = `volumes?q=${search}&`;
        return request(url,params);
    }
    const getDetail = (id) => {
        const url = `volumes/${id}`;
        return request(url);
    }

    return{getBySearch,getDetail,process};
}

export default useBookApi;