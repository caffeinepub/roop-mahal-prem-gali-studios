import { useMutation } from "@tanstack/react-query";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (_data: {
      name: string;
      email: string;
      message: string;
    }) => {
      // Backend has no contact endpoint yet — simulate success
      await new Promise((resolve) => setTimeout(resolve, 800));
      return true;
    },
  });
}
