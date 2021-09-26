function JoinCommunity() {
  return (
    <div className="flex flex-col items-start mt-10 md:mt-0 md:pr-28">
      <div className="w-full flex flex-row items-center space-x-4 md:justify-around">
        <img src="/logo.svg" alt="Mintable logo" className="w-10 h-10" />
        <p className="text-lg">Mintable</p>
      </div>

      <a href="/" className="font-bold mt-7">
        Join Our Community
      </a>
    </div>
  );
}

function MyAccount() {
  return (
    <div className="flex flex-col items-start">
      <div className="font-bold">My Account</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-4">
        <a href="/">Create a store</a>
        <a href="/">My Profile</a>
        <a href="/">List an Item for sale</a>
        <a href="/">Browse</a>
      </div>
    </div>
  );
}

function NeedHelp() {
  return (
    <div className="flex flex-col items-start">
      <div className="font-bold">Need Help?</div>
      <div className="grid grid-cols-1 gap-2 md:gap-4 mt-4">
        <a href="/">FAQ</a>
        <a href="/">Mintable guide</a>
      </div>
    </div>
  );
}

function BuyAnItem() {
  return (
    <div className="flex flex-col items-start">
      <div className="font-bold">Buy an Item</div>
      <div className="grid grid-cols-1 gap-2 md:gap-4 mt-4">
        <a href="/">Digital Items</a>
        <a href="/">Store</a>
      </div>
    </div>
  );
}

function Legal() {
  return (
    <div className="flex flex-col items-start">
      <div className="font-bold">Legal</div>
      <div className="grid grid-cols-1 gap-2 md:gap-4 mt-4">
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of use</a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-footer w-full mt-4 flex flex-col pl-10 py-4 md:py-10 md:flex-row-reverse justify-center text-white md:space-x-20">
      <section className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10">
        <MyAccount />
        <NeedHelp />
        <BuyAnItem />
        <Legal />
      </section>

      <JoinCommunity />
    </div>
  );
}
