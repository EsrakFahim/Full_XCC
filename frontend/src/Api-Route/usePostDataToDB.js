import { useMutation } from 'react-query';
import axios from 'axios';
import { baseApiURL } from '../Constant/constant';

const postDataToServer = async (data, collection) => {
      const response = await axios.post(`${baseApiURL}/${collection}`, data);
      return response.data;
};

const usePostData = (onSuccess, onError, collection) => {
      // const queryClient = useQueryClient();

      return useMutation({
            mutationFn: (data) => postDataToServer(data, collection),
            onSuccess: (response) => {
                  // Optional: Invalidate queries to refetch data if needed
                  // queryClient.invalidateQueries(['fetchData']);
                  if (onSuccess) onSuccess(response);
            },
            onError: (error) => {
                  if (onError) onError(error);
            },
      });
};

export default usePostData;
