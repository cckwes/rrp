import { useState } from "react";

function MenuItems() {
  return (
    <>
      <div className="block border-1 border-searchBox md:px-4">
        <select name="base-currency" id="base-currency">
          <option value="ethereum" selected>
            Ethereum
          </option>
          <option value="zilliqa">Zilliqa</option>
        </select>
      </div>

      <a href="/">My Account</a>
      <a href="/">Vote/DAO</a>
      <a href="/">Mint an Item</a>
      <a href="/">Discover</a>
      <a href="/">Browse</a>
    </>
  );
}

export function Header() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <>
      {/*mobile menu*/}
      <div
        className="bg-white relative z-100 top-0 left-0 w-screen h-screen p-4"
        hidden={!mobileMenuOpened}
      >
        <div className="flex flex-col space-y-4">
          <div
            className="flex flex-row-reverse w-full"
            onClick={() => setMobileMenuOpened(false)}
          >
            <img
              src="/close.svg"
              alt="close menu"
              className="w-6 ml-4 md:hidden"
            />
          </div>
          <MenuItems />
        </div>
      </div>

      <div className="w-full flex flex-row py-2 md:py-4 bg-white px-4 md:px-10 items-center filter drop-shadow-lg">
        <img src="/logo.svg" alt="Mintable logo" className="w-10 h-10" />

        {/*search box*/}
        <div className="flex flex-row ml-5">
          <div className="border-2 border-searchBox flex flex-row rounded-md">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full p-2"
            />
            <select
              name="search-type"
              id="search-type"
              className="bg-searchBox w-20 pl-4"
            >
              <option value="" hidden selected>
                Type
              </option>
              <option value="all">All</option>
              <option value="art">Art</option>
              <option value="collectibles">Collectibles</option>
              <option value="gameItems">Game Items</option>
              <option value="music">Music</option>
              <option value="domains">Domains</option>
              <option value="templates">Templates</option>
              <option value="videos">Videos</option>
              <option value="stores">Stores</option>
            </select>
            <button className="bg-searchBox p-1">
              <img
                src="/searchicon.svg"
                alt="search button"
                className="w-5 h-5 hidden md:block"
              />
            </button>
          </div>
        </div>

        {/*menu*/}
        <div className="hidden md:flex flex-row-reverse space-x-10 items-center flex-grow">
          <MenuItems />
        </div>

        {/*burger menu icon*/}
        <div onClick={() => setMobileMenuOpened(true)}>
          <img
            src="/menu-icon.svg"
            alt="mobile menu"
            className="w-6 ml-4 md:hidden"
          />
        </div>
      </div>
    </>
  );
}
