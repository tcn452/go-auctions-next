// app/rules-of-action/page.jsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function RulesOfAction() {
  const [rules] = useState([
    {
      id: 1,
      title: "Announcement of Reasons for Sale",
      content: "Should there be any reason other than the normal disposition of the property by the seller, it will be announced by the auctioneer."
    },
    {
      id: 2,
      title: "Compliance with Consumer Protection Act",
      content: "All auctions comply with Section 45 of the Consumer Protection Act 68 of 2008 and the governing regulations thereto."
    },
    {
      id: 3,
      title: "Reserve Price",
      content: "All Go Property Solutions auctions are subject to a reserve price."
    },
    {
      id: 4,
      title: "Auctioneer's Right to Bid",
      content: "The auctioneer, as a representative of Go Property Solutions, is entitled to bid on behalf of the owner."
    },
    {
      id: 5,
      title: "Commencement Time",
      content: "The auction will commence on the given date and time, and will not be delayed for any reason whatsoever."
    },
    {
      id: 6,
      title: "Condition of Sale",
      content: "All lots are sold as per the condition of sale and standard terms and conditions, subject to acceptance by the seller within 3 (three) days. Each lot is offered as a separate transaction and is only considered complete once the auctioneer has initiated the bidding process and announced the word \"sold\" on the fall of the hammer."
    },
    {
      id: 7,
      title: "Regulation of Bidding Advances",
      content: "The auctioneer holds the sole right to regulate the advance in bidding."
    },
    {
      id: 8,
      title: "Trust Account",
      content: "In terms of the Estate Agency Affairs Act, all monies received for the benefit of the buyer or seller will be retained in a trust account. Upon acceptance of the offer by the purchaser, these funds will be paid over to the conveyancers, less the agreed commission."
    },
    {
      id: 9,
      title: "Registration Requirements",
      content: "On registration, all bidders must read these rules of auction and comply with all ID, residence, valid tax number, and FICA requirements."
    },
    {
      id: 10,
      title: "Authority to Transact",
      content: "Any bidder bidding on behalf of a company or another individual must produce an authority to transact on the correct documentation, as well as the company's tax clearance certificate."
    },
    {
      id: 11,
      title: "Bidders' Record and Vendor Roll",
      content: "The bidders' record and vendor roll required to be kept in terms of the CPA will be available for perusal during normal working hours at the offices of Go Property Solutions."
    },
    {
      id: 12,
      title: "Tax Certificates",
      content: "The property can only be transferred with valid seller's and buyer's tax certificates."
    },
    {
      id: 13,
      title: "Liability Exclusions",
      content: "",
      bulletPoints: [
        "These rules do not exclude liability for inaccurate information provided in the advertising of the auction.",
        "They do not exclude liability for the rules of auction not meeting the requirements of the regulations of the Consumer Protection Act 68 of 2010.",
        "They do not exclude the rules of inspection.",
        "They do not contain any qualification, reservation, or reduction of the requirements of the regulations unless provided for."
      ]
    },
    {
      id: 14,
      title: "Specific Rules Related to the Auctioneer",
      content: "",
      bulletPoints: [
        "Any amendments to the rules of auction will be announced verbally by the auctioneer at the auction.",
        "Should the auctioneer who signed these rules be unable to conduct the auction for any reason, the person who conducts the auction is deemed to have certified the rules of auction.",
        "The auctioneer is personally liable for the contents of the rules of auction applicable to the specific auction."
      ]
    },
    {
      id: 15,
      title: "Reading of Rules at the Auction",
      content: "The rules of auction need not be read at the auction if they were available 24 hours prior to the auction."
    },
    {
      id: 16,
      title: "Invitation for Objections",
      content: "At the auction, the auctioneer invites any person present to object to these rules, and such objections will be noted on the vendor's roll."
    }
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto pt-8 px-4">
        <div className="flex items-center text-sm mb-2">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-gray-900">Rules of Auction</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Rules Of Auction</h1>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white p-8 rounded-lg">
        

          <div className="space-y-4">
            {rules.map((rule) => (
              <div key={rule.id} className="mb-6">
                <div className="flex items-start">
                  <div className="mr-2">{rule.id}.</div>
                  <div className="flex-1">
                    <span className="font-semibold">{rule.title}</span>{rule.content && `: ${rule.content}`}
                    
                    {rule.bulletPoints && rule.bulletPoints.length > 0 && (
                      <ul className="list-disc ml-6 mt-2 space-y-2">
                        {rule.bulletPoints.map((point, index) => (
                          <li key={index} className="pl-2">{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}