import { Appbar } from "@/components/Appbar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="text-center p-4">
                20% off on new Signin
                <Appbar />
            </div>
            {children}
        </div>
    );
}