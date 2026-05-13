import { useAppStore } from "../../store/useAppStore";
import Button from "../../components/Button";

type RequestListProps = {
  onEditRequest: (id: string) => void;
};

export default function RequestList({ onEditRequest }: RequestListProps) {
  const { role, requests, updateStatus } = useAppStore();
  const DESC_LIMIT = 115;

  const handleUpdateStatus = (id: string) => {
    const currentRequest = requests.find((req) => req.id === id);

    switch (currentRequest?.status) {
      case "new": {
        updateStatus(id, "in progress");
        break;
      }
      case "in progress": {
        updateStatus(id, "done");
        break;
      }
    }
  };

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {role === "user" &&
        requests.map((request) => (
          <li
            key={request.id}
            className="flex flex-col gap-3 bg-slate-200 p-4 min-h-60 w-60 rounded-2xl"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-center text-2xl">{request.title}</h3>
              <span className="">
                Status:{" "}
                <span
                  className={`${request.status === "new" && "text-blue-500"} ${request.status === "in progress" && "text-amber-500"} ${request.status === "done" && "text-green-600"}`}
                >
                  {request.status}
                </span>
              </span>
            </div>
            <p className="wrap-break-word">
              {request.description.length > DESC_LIMIT
                ? `${request.description.slice(0, DESC_LIMIT)}...`
                : request.description}
            </p>

            {request.status === "new" && (
              <Button
                className="mt-auto"
                onClick={() => onEditRequest(request.id)}
              >
                Edit Request
              </Button>
            )}
          </li>
        ))}
      {role === "manager" &&
        requests.map((request) => (
          <li
            key={request.id}
            className="flex flex-col gap-3 bg-slate-200 p-4 min-h-60 w-60 rounded-2xl"
          >
            <div className="flex flex-col gap-6 justify-between">
              <h3 className="text-center text-2xl">{request.title}</h3>
              <div className="flex justify-between">
                <span>
                  Status:{" "}
                  <span
                    className={`${request.status === "new" && "text-blue-500"} ${request.status === "in progress" && "text-amber-500"} ${request.status === "done" && "text-green-600"}`}
                  >
                    {request.status}
                  </span>
                </span>
                <span>ID: {request.id.slice(0, 4)}</span>
              </div>
            </div>
            <p className="wrap-break-word">{request.description}</p>

            <Button
              className="mt-auto"
              onClick={() => handleUpdateStatus(request.id)}
            >
              Update status
            </Button>
          </li>
        ))}
    </ul>
  );
}
