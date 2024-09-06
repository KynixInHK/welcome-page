import MatrixEffect from "@/components/MatrixEffect";
import "./style.scss"
import ButtonGroup from "@/components/views/ButtonGroup";
import PanelArea from "@/components/views/PanelArea";

export default function Home() {
  return (
      <div className={"text-white back w-full h-full"}>
        <MatrixEffect/>
        <div className={"w-full h-full fixed left-0 top-0 flex flex-col justify-center items-center"}>
            <div className={"Spark text-6xl leading-relaxed text-center"}>在自我的世界里感受自由</div>
            <div className={"Spark text-4xl leading-relaxed text-center"}>Feel free in your own world.</div>

            <ButtonGroup/>

            <div className={"Spark text-sm fixed bottom-4"}>版权所有 ©️ {new Date().getFullYear()} Kynix 于 Axiomatrix Org. 和 学生在线. 保留一切权利.</div>
        </div>

        <PanelArea/>
      </div>
  );
}
