import { useQuery } from "react-query";
import axios from "axios";
import { baseApiURL } from "../Constant/constant";

const useFetchDataWithLimit = (collection, page = 1, limit = 10) => {
      const fetchUrl = `${baseApiURL}/${collection}?page=${page}&limit=${limit}`;

      return useQuery(
            [collection, page],
            async () => {
                  const { data } = await axios.get(fetchUrl);
                  return data;
            },
            {
                  keepPreviousData: true, // This keeps the previous data while fetching new data
                  refetchOnWindowFocus: false,
            }
      );
};

export default useFetchDataWithLimit;
