import { Modal } from "@/components/Modal";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <Layout>
      <Button className="w-32" onClick={() => setIsOpen(!isOpen)}>
        Open Modal
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col">
            <Typography align="center" tag="h3" size="xl" semiBold>
              Conversational Companion: ChatGPT
            </Typography>
            <Typography align="center" className="pt-2 pb-4">
              ChatGPT is your intelligent conversational partner, ready to
              engage in enlightening discussions, offer insightful advice, and
              assist with a wide range of topics. From answering questions to
              providing recommendations, ChatGPT is here to enhance your online
              interactions and provide valuable assistance whenever you need it.
            </Typography>
          </div>
        </Modal>
      )}
    </Layout>
  );
}
