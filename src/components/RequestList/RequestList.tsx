import { useAppStore } from "../../store/useAppStore";

export default function RequestList() {
  const { role, requests } = useAppStore();
  const DESC_LIMIT = 6;

  return (
    <ul>
      {role === "user" &&
        requests.map((request) => (
          <li key={request.id}>
            <div>
              <h3>{request.title}</h3>
              <span>Status: {request.status}</span>
            </div>
            <p>{`${request.description.slice(0, DESC_LIMIT)}...`}</p>
          </li>
        ))}
      {role === "manager" &&
        requests.map((request) => (
          <li key={request.id}>
            <div>
              <h3>{request.title}</h3>
              <span>
                Status: {request.status} | ID: {request.id}
              </span>
            </div>
            <p>{request.description}</p>
          </li>
        ))}
    </ul>
  );
}
