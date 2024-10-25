// import { Image, Menu, Select } from "antd";
// import Logo from "../assets/logo.svg";
// import { getNavbarItems } from "../config/navbar";
// import { roleNames, Roles } from "../config/roles";
// import { userStore } from "../store/user";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// export const RootLayout: React.FC<{ children: JSX.Element }> = ({ children }: { children: JSX.Element }) => {
//   const { role, setRole } = userStore((state) => state);
//   const items: any = getNavbarItems(role);
//   const navigate = useNavigate();

//   const roleOptions = Object.keys(Roles).map((key) => ({
//     label: roleNames[Roles[key as keyof typeof Roles]],
//     value: Roles[key as keyof typeof Roles],
//   }));

//   useEffect(() => {
//     if (items && items?.length > 0) {
//       navigate(items[0].href);
//     }
//   }, [role]);

//   return (
//     <div className="h-full w-full">
//       <header className="w-full flex items-center justify-between h-[70px] px-6 bg-sky-700">
//         <Image preview={false} src={Logo} />
//         <div className="flex items-center gap-3">
//           <p className="text-white font-semibold">Fərid Əsədli</p>
//           <Select defaultValue={role} className="w-[150px]" options={roleOptions} onChange={(value) => setRole(value as Roles)} />
//         </div>
//       </header>
//       <div className="h-full flex">
//         <aside className="flex-[1] max-w-[300px] pt-3">
//           <Menu mode="inline" items={items} className="h-full" selectedKeys={[items.find((item: any) => item.href === location.pathname)?.key]} />
//         </aside>

//         <main className="p-4 w-full flex-[4]">{children}</main>
//       </div>
//     </div>
//   );
// };


















import { Image, Menu, Select } from "antd";
import Logo from "../assets/logo.svg";
import { getNavbarItems } from "../config/navbar";
import { roleNames, Roles } from "../config/roles";
import { userStore } from "../store/user";
import { useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";


export const RootLayout: React.FC<{ children: JSX.Element }> = ({ children }: { children: JSX.Element }) => {
  const { role, setRole } = userStore((state) => state);
  const items: any = getNavbarItems(role);
  const navigate = useNavigate();
  const location = useLocation();

  const roleOptions = Object.keys(Roles).map((key) => ({
    label: roleNames[Roles[key as keyof typeof Roles]],
    value: Roles[key as keyof typeof Roles],
  }));

  useEffect(() => {
    if (items && items?.length > 0) {
      navigate(items[0].href);
    }
  }, [role]);

  return (
    <div className="h-full w-full">
      <header className="w-full flex items-center justify-between h-[70px] px-6 bg-sky-700">
        <Image preview={false} src={Logo} />
        <div className="flex items-center gap-3">
          <p className="text-white font-semibold">Fərid Əsədli</p>
          <Select defaultValue={role} className="w-[150px]" options={roleOptions} onChange={(value) => setRole(value as Roles)} />
        </div>
      </header>
      <div className="h-full flex">
        {/* Conditionally render the Menu only if not on the "/conflict" route */}
        {location.pathname !== "/conflict" && (
          <aside className="flex-[1] max-w-[300px] pt-3">
            <Menu mode="inline" items={items} className="h-full" selectedKeys={[items.find((item: any) => item.href === location.pathname)?.key]} />
          </aside>
        )}
        <main className="p-4 w-full flex-[4]">{children}</main>
      </div>
    </div>
  );
};