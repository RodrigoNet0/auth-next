import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">
          Olá, {session?.user?.name}
        </h1>
        <h2 className="text-xl text-gray-700">Bem-vindo ao seu Dashboard!</h2>
      </div>
    </div>
  );
}
