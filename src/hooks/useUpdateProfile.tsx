/** @format */

import React from "react";
import { User } from "@prisma/client";
import supabase from "@/libs/supabase";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import moment from "moment-timezone";

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
//   const user = useUser();

  const { mutate: updateProfile } = useMutation({
    mutationFn: update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function update(user?: User) {
    const state = await supabase.from("User").update({
      id: uuidv4(),
      username: user?.username,
      bio: user?.bio,
      email: user?.email,
    });
    if (state) {
      toast("Cập nhật profile thành công");
    }
  }

  return { updateProfile };
};

export default useUpdateProfile;
