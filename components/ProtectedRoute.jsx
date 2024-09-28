import { useRouter } from 'next/navigation';
import useStore from '../store/useStore';

const ProtectedRoute = ({ children, role }) => {
  const { authenticated, user } = useStore();
  const router = useRouter();

  if (!authenticated) {
    router.push('/auth/login');
    return null;
  }

  if (role && user?.role !== role) {
    router.push('/not-authorized');
    return null;
  }

  return children;
};

export default ProtectedRoute;
