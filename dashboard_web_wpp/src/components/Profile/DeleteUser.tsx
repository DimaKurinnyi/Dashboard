import { signOut } from 'next-auth/react';

export const DeleteUser = ({ email }: { email: string }) => {
  const handleClick = async (email: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete your account?");
    if (!isConfirmed) {
      return; // Если пользователь отменил действие, выйти из функции
    }
    try {
      const res = await fetch('/api/deleteUser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      console.log(data.message); // Успешное удаление
      await signOut();
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  return (
    <div
      className="text-nowrap mt-10 text-red-400 hover:scale-105"
      onClick={() => handleClick(email)}
    >
      Delete Account
    </div>
  );
};