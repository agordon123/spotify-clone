"use client";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import {
  useSessionContext,
  useSupabaseClient,

} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
  const { session } = useSessionContext();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();
  const onChange = (open:boolean) => {
    if (!open) {
      onClose();
    }
  }

  useEffect(() => { 
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session,router,onClose]);
  return (
    <Modal
      title="Welcome Back"
      description="Log in to your Account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        magicLink={true}
        supabaseClient={supabaseClient}
        providers={["github"]}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
