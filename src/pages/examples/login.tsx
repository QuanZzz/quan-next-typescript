import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
// import "@/app/globals.css";

export default function Page() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [isDisabled, setIsDiabled] = useState(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(credentials.username, credentials.password);
  };

  useEffect(() => {
    setIsDiabled(!credentials.username || !credentials.password);
  }, [credentials]);

  return (
    <Layout>
      <div className="mx-auto min-h-full px-5 py-16 max-w-md flex flex-col items-center">
        <div className="text-center flex-col-center rounded-xl box-shadow p-8 w-full">
          <input
            type="text"
            className="mb-4 border border-gray-200 rounded-lg px-2"
            placeholder="Username"
            id="username"
            onChange={handleOnChange}
          />
          <input
            type="password"
            className="mb-4 border border-gray-200 rounded-lg px-2"
            placeholder="Password"
            id="password"
            onChange={handleOnChange}
          />
          <Button onClick={handleOnClick} disabled={isDisabled}>
            Login
          </Button>
        </div>
      </div>
    </Layout>
  );
}
