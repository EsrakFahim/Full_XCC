import { useQuery } from "react-query";
import axios from "axios";
import { baseApiURL } from "../Constant/constant";

const useFetchSingleData = (collection, id, serviceSlag) => {
      const endpoint = `${
            baseApiURL
      }/${collection}/${id || serviceSlag}`;

      // console.log("Fetching from URL:", endpoint);

      return useQuery(
            ["data", collection, id || serviceSlag],
            async () => {
                  try {
                        const { data } = await axios.get(endpoint);
                        // console.log("Fetched data:", data);
                        return data;
                  } catch (error) {
                        console.error("Error fetching data:", error);
                        throw new Error(
                              error.response?.data?.message ||
                                    "Failed to fetch data"
                        );
                  }
            },
            {
                  enabled: !!(collection && (id || serviceSlag)), // Only fetch if collection and one of id or serviceSlag is provided
                  refetchOnWindowFocus: false,
            }
      );
};

export default useFetchSingleData;