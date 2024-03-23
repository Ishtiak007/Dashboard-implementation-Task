import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProjects = () => {
    const axiosPublic = useAxiosPublic();

    const { data: projects = [], isPending: loading, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axiosPublic.get('/projects');
            return res.data;
        }
    })

    return [projects, loading, refetch]
}

export default useProjects;