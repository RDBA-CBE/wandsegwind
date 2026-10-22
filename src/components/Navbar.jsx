
"use client"

import { useState,useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight } from "lucide-react"

import { axiosGet } from "@/lib/api"



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openSubDropdown, setOpenSubDropdown] = useState(null)
  const pathname = usePathname()
  const [tabsData, setTabsData] = useState([]);
  const [inventory,setInventory]= useState([])


  const fetchTabsData = async () => {
    
    try {
      
      const response = await axiosGet.get(
        "masters/solutions/get/?web_sts=1&order_type=ASC&order_field=created_date"
      );
      const tabs = response.data.data;
      setTabsData(tabs);
      
    } catch (err) {
      console.error("Tabs Error:", err);
    }
  };

  useEffect(() => {
    fetchTabsData();
  }, []);

 const fetchInventoryData = async () => {
    
    try {
      
      const response = await axiosGet.get(
        "masters/spareinventory/get/?web_sts=1&order_type=ASC&order_field=created_date"
      );
      const tabs = response.data.data;
      setInventory(tabs);
      
    } catch (err) {
      console.error("Tabs Error:", err);
    }
  };

  useEffect(() => {
    fetchInventoryData();
  }, []);



  const [omData, setOmData] = useState([]);



  const fetchOmData = async () => {
    
    try {
      
      const response = await axiosGet.get(
        "masters/om/get/?web_sts=1&order_type=ASC&order_field=created_date"
      );
      const tabs = response.data.data;
      setOmData(tabs);
      
    } catch (err) {
      console.error("Tabs Error:", err);
    }
  };

  useEffect(() => {
    fetchOmData();
  }, []);



 const solutionDropdown = Array.isArray(tabsData)
  ? tabsData
      .filter(item => item.active_status !== 0)
      .map(item => ({
        label: item.title,
        href: `/solution-details?solution_id=${item.data_uniq_id}`,
      }))
  : [];

  
  const inventoryDropdown = Array.isArray(inventory)
  ? inventory
      .filter(item => item.active_status !== 0)
      .map(item => ({
        label: item.title,
        href: `/spare-inventory?solution_id=${item.data_uniq_id}`,
      }))
  : [];



   const omDropdown = Array.isArray(omData)
  ? omData
      .filter(item => item.active_status !== 0)
      .map(item => ({
        label: item.title,
        href: `/o&m-contract?solution_id=${item.data_uniq_id}`,
      }))
  : [];

  const wandseDropdown = [
    { label: "Wind Turbine Spare Parts", href: "/solutions/wandse/wind-turbine-spare-parts" },
    { label: "Solar Plant Spare Parts", href: "/solutions/wandse/solar-plant-spare-parts" },
  ];

  const solutionMenu = [
    {
      label: "Gwind Solution",
      href: "/solutions",
      children: solutionDropdown,
    },
    {
      label: "Wandse Solution",
      href: "/solutions/wandse",
      children: wandseDropdown,
    },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Solutions",
        href: "/solutions",
        dropdown:solutionMenu,
    },
    {
      label: "O & M Contract",
      href: "/solutions",
      dropdown: omDropdown,
    },
    {
      label: "Spare Inventory",
      href: "#",
      dropdown: inventoryDropdown,
    },
    { label: "Expertise", href: "/expertise" },
    { label: "Projects", href: "/project" },
    { label: "IMS @ GWind", href: "/ims@gwind" },
    { label: "News & Media", href: "/news" },
    { label: "Career", href: "/career" },
    { label: "Corporate", href: "/corporate" },
  ]

  const isActive = (href) => pathname === href

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="gwind Logo"
                width={90}
                height={50}
                className="object-contain"
                priority
              />
              <Image
                src="/images/wandseLogo.jpg"
                alt="gwind Logo"
                width={100}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8 relative">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors ${
                      isActive(item.href)
                        ? "font-bold bg-gradient-to-r from-[#3AB257] to-[#329ACD] bg-clip-text text-transparent"
                        : "text-[#293E52] hover:text-teal-600 font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 text-[#293E52] transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180 text-teal-600" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown (Desktop) */}
                {item.dropdown && (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}
                    className={`absolute left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                      openDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="flex flex-col py-2 w-56">
                      {item.dropdown.map((subItem) => (
                        <div
                          key={subItem.label}
                          className="relative"
                          onMouseEnter={() => subItem.children && setOpenSubDropdown(subItem.label)}
                          onMouseLeave={() => subItem.children && setOpenSubDropdown(null)}
                        >
                          <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                          >
                            {subItem.label}
                            {subItem.children && (
                              <ChevronRight className="w-3.5 h-3.5 ml-2 text-gray-400" />
                            )}
                          </Link>

                          {/* Nested Sub-Dropdown (Desktop) */}
                          {subItem.children && (
                            <div
                              className={`absolute left-full top-0 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                                openSubDropdown === subItem.label ? "opacity-100 visible" : "opacity-0 invisible"
                              }`}
                            >
                              <div className="flex flex-col py-2 w-56">
                                {subItem.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden fixed top-20 right-0 w-full bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="pb-4 flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div
                  className="flex justify-between items-center px-4 py-2"
                  onClick={() =>
                    item.dropdown ? setOpenDropdown(openDropdown === item.label ? null : item.label) : setIsOpen(false)
                  }
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium ${
                      isActive(item.href)
                        ? "font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent"
                        : "text-gray-700 hover:text-teal-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="flex flex-col pl-8">
                    {item.dropdown.map((subItem) => (
                      <div key={subItem.label} className="flex flex-col">
                        <div
                          className="flex justify-between items-center py-2"
                          onClick={() =>
                            subItem.children
                              ? setOpenSubDropdown(openSubDropdown === subItem.label ? null : subItem.label)
                              : setIsOpen(false)
                          }
                        >
                          <Link
                            href={subItem.href}
                            className="text-sm text-gray-600 hover:text-teal-600"
                          >
                            {subItem.label}
                          </Link>
                          {subItem.children && (
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${openSubDropdown === subItem.label ? "rotate-180" : ""}`}
                            />
                          )}
                        </div>

                        {/* Mobile Sub-Dropdown */}
                        {subItem.children && openSubDropdown === subItem.label && (
                          <div className="flex flex-col pl-6">
                            {subItem.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="py-2 text-sm text-gray-500 hover:text-teal-600"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
