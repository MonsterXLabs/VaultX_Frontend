import React from 'react'

export default function AddFunds() {
  return (
    <div className="p-3" style={{
        fontFamily: "Azeret Mono"
      }}>
      <h2 className="text-lg text-white font-medium">Add funds to purchase</h2>
      <hr className="w-full text-white" />
      <div className="my-2 text-white">
        <p className="mt-3 text-sm">You need 10.00 ETH + <span className="text-[#DDF247]">gas fees</span></p>
        <p className="mt-3 opacity-70 text-sm">Transfer funds to your wallet or add funds with a card. It can take up to a minute for your balance to update</p>
      </div>
      <div className="text-white my-6">
        <div className="text-sm flex justify-between">
          <span>Your ETH wallet:</span>
          <span>Balance: <span className="text-[#DDF247]">0.01 Matic</span></span>
        </div>
        <div className="flex p-3 rounded-lg justify-between my-2 bg-[#232323] text-sm">
          <span>0x65fdf56dfd968f5d65f65fe26e6d26er</span>
          <img src="../../assets/icons/copy.svg" />
        </div>
      </div>
      <button className="w-full py-3 text-center rounded-xl text-[#DDF247]" style={{
        backgroundColor: 'rgba(224, 255, 0, 0.10)'
      }}>Continue</button>
      <p className="text-sm text-white text-center my-4">or</p>
      <p className="text-sm text-white text-center my-2 cursor-pointer">Add funds with card</p>
    </div>
  )
}
