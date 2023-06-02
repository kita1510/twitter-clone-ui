/** @format */

import client from "@/libs/axios";
import supabase from "@/libs/supabase";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeleteTweet = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTweet, isLoading } = useMutation({
    mutationFn: delTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      queryClient.invalidateQueries({ queryKey: ["tweetttt"] });
      toast.success("Xóa bài thành công", { autoClose: 3000 });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function delTweet(id: string) {
    // const state = await supabase.from("Tweet").delete().eq("id", id);
    // if (state?.error) {
    //   toast.error(state?.error?.message);
    // }
    const state = await client.delete(`/tweet/${id}`);
  }

  return { deleteTweet, isLoading };
};

export default useDeleteTweet;
