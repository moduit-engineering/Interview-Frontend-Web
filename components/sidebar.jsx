import Image from "next/image"
import Link from "next/link"
import { Layout, Menu } from "antd"
import { useRouter } from "next/router"

const { Sider } = Layout

const SidebarComponent = () => {
  
  const Router = useRouter();

  return (
    <>
      <div className="py-8">
        <Image
          src="/logo/logo.svg"
          alt="Homepage"
          width={135}
          height={34}
          className="bg-white"
        />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100vh" }}
        className="sidebar"
      >
        <Menu.Item 
          icon={<Image
            src="/icon/Q1.svg"
            alt="Question 1"
            width={24}
            height={25}
          />}
        >
          <Link href='/'>
            Question 1
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={
          <Image
            src="/icon/Q2.svg"
            alt="Question 2"
            width={24}
            height={24}
          />}
        >
          <Link href='/question-2'>
            Question 2
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default SidebarComponent;