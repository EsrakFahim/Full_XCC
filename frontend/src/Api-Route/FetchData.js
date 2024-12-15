import { useQuery } from "react-query";
import axios from "axios";
import { baseApiURL } from "../Constant/constant";

const useFetchDataFromDB = (collection) => {

      // console.log(process.env.REACT_APP_PRODUCTION_SERVER_API)
      const { data, isError, isLoading } = useQuery(
            ["data", collection],
            async () => {
                  const { data } = await axios.get(
                        `${baseApiURL}/${collection}`
                  );
                  // console.log("Fetched data with axios:", data);
                  return data;
            },
            {
                  refetchOnWindowFocus: false,
            }
      );

      return { data, isError, isLoading };
};

export default useFetchDataFromDB;
