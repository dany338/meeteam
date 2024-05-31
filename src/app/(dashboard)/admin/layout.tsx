import { getServerSession } from "next-auth";
import { authOptions } from '@/auth.config';

import { redirect } from 'next/navigation';

export default async function AdminLayout({children}: {
 children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const userRoles = session?.user?.roles ?? ["client"];

  if ( userRoles.length && !userRoles.includes('admin') ) {
    redirect('/login');
  }

  return (
    <>
      { children }
    </>
  );
}