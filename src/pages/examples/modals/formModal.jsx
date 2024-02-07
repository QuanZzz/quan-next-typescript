import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(credential);
  };

  return (
    <Layout>
      <Button className="w-32" onClick={() => setIsOpen(!isOpen)}>
        Open Modal
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <label>Username:</label>
              <input
                id="username"
                onChange={handleOnChange}
                placeholder="Enter your username"
                className="border border-gray-200 rounded-md ml-2 px-2"
              />
            </div>

            <div className="flex items-center pt-2">
              <label>Password:</label>
              <input
                id="password"
                onChange={handleOnChange}
                placeholder="Enter your password"
                className="border border-gray-200 rounded-md ml-2 px-2"
              />
            </div>

            <div className="flex w-full justify-end">
              <Button
                className="mt-4 mr-4 flex items-end"
                size="sm"
                onClick={handleOnClick}
              >
                Login
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
}
