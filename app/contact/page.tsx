import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="">
      <div className="w-full">
        <Image
          src="https://picsum.photos/seed/picsum/2200/2200"
          width={2200}
          height={2200}
          alt="contact page background image"
          className="object-fill w-full h-auto max-h-[180px] md:max-h-[320px] rounded-md"
        />
      </div>
      <div className="mx-4 my-12">
        <h3 className="w-full text-lg lg:text-3xl tracking-wider font-bold">
          お問い合わせ
        </h3>

        <h5 className="text-sm lg:text-lg font-semibold my-3 underline">
          お問い合わせの際の注意点
        </h5>
        <p className="text-gray-500 text-xs md:text-sm lg:text-sm tracking-wide">
          お客様からのお問い合わせはいつでも歓迎いたします。迅速かつ適切に対応させていただくために、以下の点にご注意ください。
        </p>
        <ul className="my-5">
          <li className="mb-3">
            <p className="text-sm md:text-base font-bold tracking-wider">
              詳細な情報を提供してください
            </p>
            <span className="block text-xs md:text-sm text-gray-500 tracking-wide leading-5 mt-2">
              お問い合わせの内容が具体的であるほど、迅速かつ正確な回答を提供することが可能です。具体的な製品名、発生している問題の詳細、ご使用の環境など、関連する情報をできるだけ詳しくお書きください。
            </span>
          </li>

          <li className="mb-3">
            <p className="text-sm md:text-base font-bold tracking-wider">
              個人情報の取り扱いについて
            </p>
            <span className="block text-xs md:text-sm text-gray-500 tracking-wide leading-5 mt-2">
              お問い合わせの際には、個人情報を含む必要な情報のみをご提供ください。提供いただいた個人情報は、お問い合わせに関する対応のみに使用し、それ以外の目的での利用は一切ありません。
            </span>
          </li>
          <li className="mb-3">
            <p className="text-sm md:text-base font-bold tracking-wider">
              返信のタイミングについて
            </p>
            <span className="block text-xs md:text-sm text-gray-500 tracking-wide leading-5 mt-2">
              通常、お問い合わせいただいた順に対応しておりますが、返信には数営業日かかる場合がございます。お急ぎの場合は、その旨を明記してください。
            </span>
          </li>
          <li className="mb-3">
            <p className="text-sm md:text-base font-bold tracking-wider">
              電話でのお問い合わせ
            </p>
            <span className="block text-xs md:text-sm text-gray-500 tracking-wide leading-5 mt-2">
              電話でのお問い合わせも受け付けております。電話番号は
              [○○○-○○○○-○○○○] です。営業時間は平日の9:00～17:00となります。
            </span>
          </li>
        </ul>
        <p className="bg-indigo-50 rounded-md shadow-sm p-3 text-xs lg:text-sm text-indigo-800 tracking-wider leading-4.5">
          ご不明な点やご質問がある場合は、遠慮なくお問い合わせください。皆様からのご意見やご感想も心よりお待ちしております。
        </p>
        <div className="my-8">
          <div>
            <Label className="text-[11px]">メールアドレス</Label>
            <Input type="email" placeholder="例:sample@email.com" />
          </div>
          <div>
            <Label className="text-[11px]">姓</Label>
            <Input type="text" placeholder="例:山田" />
          </div>
          <div>
            <Label className="text-[11px]">名</Label>
            <Input type="text" placeholder="例:太郎" />
          </div>
          <div className="w-full">
            <Label className="text-[11px]">お問い合わせ内容</Label>
            <textarea
              className="w-full h-full border rounded-md focus:outline-none focus:outline-2 focus:outline-black p-3 text-sm tracking-wider"
              cols={30}
              rows={10}
              placeholder="例:購入した商品はいつ頃届きますか？"
            />
            <div className="flex justify-center items-center mt-4 mb-12">
              <Button className="w-2/3">送信する</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
