declare let window: any;
import React from "react";
import { useData } from "../contexts/DataContext";
interface bodyProps {
    totalDonationss: any,
    address: any,
    description: any,
    hash: any,
    id: any,
}

const Body = () => {
  const data = useData()!;
const { images } = data;
  return (
    <>
      {images.length > 0 &&
        images.map((image, index) => (
          <BodyItem
            key={index}
            totalDonationss={image.donationAmount}
            address={image.author}
            description={image.description}
            hash={image.hash}
            id={image.id}
          />
        ))}
    </>
  );
};

export default Body;

const BodyItem = ({ address, description, totalDonationss, hash, id } : bodyProps) => {
   const data = useData()!;
  const { donateImageOwner, updateImages } = data;
  return (
    <div className="w-full md:mx-0 md:max-w-2xl mt-5 p-3 border rounded-xl flex flex-col">
      <div className="flex flex-row space-x-5 bg-gray-100 rounded-t-xl py-3 px-4 border-t border-l border-r font-mono items-center">
        <img width={35} height={35} src={`https://picsum.photos/seed/${data.account}/35/35`} />
        <div className="overflow-ellipsis w-52 overflow-hidden">{address}</div>
      </div>
      <img src={`https://ipfs.infura.io/ipfs/${hash}`} />
      <div className="py-3 px-4 flex flex-col border-l border-r">
        <span className="font-sans font-bold">Description</span>
        <span className="font-sans pt-2">{description}</span>
      </div>
      <div className="bg-gray-100 rounded-b-xl py-3 px-4 border-b border-l border-r font-mono flex flex-row justify-between">
        <span>
          Total DONATIONS: {window.web3.utils.fromWei(totalDonationss, "Ether")}{" "}
          MATIC
        </span>
        <div
          onClick={async () => {
            let donationAmount = window.web3.utils.toWei("1", "Ether");
            await donateImageOwner(id, donationAmount);
            await updateImages();
          }}
        >
          <span className="cursor-pointer font-bold text-blue-400">
            DONATE: 1 MATIC
          </span>
        </div>
      </div>
    </div>
  );
};