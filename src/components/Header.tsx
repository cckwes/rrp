export function Header() {
  return (
    <div className="w-full flex flex-row py-4 bg-white px-10 filter drop-shadow-lg">
      <img src="/logo.svg" alt="Mintable logo" className="w-10 h-10" />

      {/*search box*/}
      <div className="flex flex-row ml-5">
        <div className="border-2 border-searchBox flex flex-row rounded-md">
          <input
            type="text"
            placeholder="Search for anything"
            className="p-2"
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
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/*menu*/}
      <div className="flex flex-row-reverse space-x-10 items-center flex-grow">
        <select
          name="base-currency"
          id="base-currency"
          className="border-1 border-searchBox ml-10"
        >
          <option value="ethereum" selected>
            Ethereum
          </option>
          <option value="zilliqa">Zilliqa</option>
        </select>

        <a href="/">My Account</a>
        <a href="/">Vote/DAO</a>
        <a href="/">Mint an Item</a>
        <a href="/">Discover</a>
        <a href="/">Browse</a>
      </div>
    </div>
  );
}
