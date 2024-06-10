import { useMutation } from "@tanstack/react-query";

interface Variables {
  id: number;
  status: "APPROVE" | "REJECT";
}

export function useAproval(
  fetcher: (id: number, status: string) => Promise<Response>
) {
  const { mutate } = useMutation<Response, Error, Variables>({
    mutationFn: ({ id, status }) => fetcher(id, status),
    onError: () => {
      alert("아이디나 비밀번호를 잘못 입력하였습니다.");
    },
  });

  const onAprove = (id: number) => {
    mutate({ id, status: "APPROVE" });
  };

  const onReject = (id: number) => {
    mutate({ id, status: "REJECT" });
  };

  const changeStates = (eventIds: number[], status: "APPROVE" | "REJECT") => {
    eventIds.forEach((id) => {
      return mutate({ id, status });
    });
  };
}
