import { CheckCircleIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";

const Success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon Clone : Order Placed</title>
      </Head>
      <Header />
      <main className="max-w-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-3xl border-b pb-4">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We&apos;ll send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) please press the link below.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to My Orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
