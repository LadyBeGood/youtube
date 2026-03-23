import { useState } from "react";
import {
    Tab,
    Tabs,
    TabList,
    Panel,
    PanelList
} from "../components/Tabs";
import Video from "../components/Video";


const paneListStyle1 = {
    backgroundColor: "#FEA900"
};
const paneListStyle2 = {
    backgroundColor: "#b3dc4a"
};
const paneListStyle3 = {
    backgroundColor: "#6ac0ff"
};
const paneListStyle4 = {
    backgroundColor: "#ff99c0"
};
const paneListStyle5 = {
    backgroundColor: "#99ff66"
};
const paneListStyle6 = {
    backgroundColor: "#D1D1D1"
};
const paneListStyle7 = {
    backgroundColor: "#D1EEEE"
};
const paneListStyle8 = {
    backgroundColor: "#CDCD00"
};
const paneListStyle9 = {
    backgroundColor: "#836FFF"
};



const Profile = () => {

    const [index, setIndex] = useState(0)

    const onTabChange = newIndex => {
        setIndex(newIndex)
    };


    return (
        <div className="grid grid-rows-[auto_1fr]">
            <div className="relative h-48">
                <img src="./src/assets/thumbnail1.webp" alt="background" className="w-full h-24 block object-cover" />
                <div className="grid place-items-center absolute -translate-1/2 left-1/2 ">
                    <img src="./src/assets/avatar1.webp" className="rounded-full block  border-black border-5" alt="" />

                    <p className="text-xl">Michael Faraday</p>
                    <p className="text-sm text-cool-gray">@michaelfaraday</p>
                </div>
            </div>
            <div className="h-full">
                <Tabs activeIndex={index} onTabChange={onTabChange} className="h-full w-full select-none" inkColor="white" activeTabColor="white">
                    <TabList className="text-cool-gray h-10">
                        <Tab>Home</Tab>
                        <Tab>GIFs</Tab>
                        <Tab>About</Tab>
                    </TabList>
                    <PanelList className="h-full">
                        <Panel>
                            <Video title={"Build Amazon Clone usisng React JS for Beginners | Complete Website like Amazon In React JS 2025"} channel={"CodingHunger"} profilePictureURL={"./src/assets/avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./src/assets/thumbnail1.webp"} duration={"4:17:17"} />
                        </Panel>
                        <Panel>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo voluptatibus consequatur. Id numquam autem laborum consequatur voluptates quis sit vero, porro aut ratione iure quibusdam, nostrum recusandae architecto molestias.
                        Necessitatibus iure aut assumenda quae libero esse inventore culpa autem quod deserunt, incidunt sequi. Assumenda fugiat harum natus nam magni reprehenderit, aliquid officiis neque, voluptates deserunt dolores? Soluta, quod in.
                        Illo libero illum sequi porro nulla tempora assumenda quaerat magnam cum placeat fugiat fuga accusantium consectetur alias sit, reprehenderit quae aspernatur ab deserunt eos, corrupti non dolorum suscipit! Nesciunt, eaque!
                        Sit iste minima ad corporis? Repellat hic, molestias possimus maxime temporibus cumque! Vitae praesentium fugit pariatur totam harum minima magni optio ea quos earum, veniam temporibus veritatis quo modi corporis.
                        Veritatis, alias exercitationem! Odit amet dolores corporis error! Nulla voluptatibus odio, excepturi, est voluptates non dolorum, sed at dignissimos facere iusto repudiandae earum omnis! Culpa unde ad adipisci nesciunt et.
                        Animi, maiores non ullam eius consectetur dolore quo, mollitia voluptatibus expedita odio illum vel eaque fuga sed perspiciatis tempore accusamus inventore nihil consequatur minima ab facere eveniet. Magnam, ad hic!
                        Consequatur consequuntur ad officiis debitis rem, cum minus iure delectus amet repudiandae magni asperiores sequi reiciendis quo fuga nostrum hic fugit impedit blanditiis, explicabo ducimus velit, quia est saepe. Unde.
                        Delectus, quis nam placeat fugit iusto quaerat excepturi vitae. Voluptates inventore exercitationem blanditiis aut quis vero vitae? Beatae possimus officiis voluptates aliquid facere, minus doloremque modi nihil, voluptatem unde placeat!
                        Commodi optio sequi dicta voluptate quis illum, quidem et nobis in provident nostrum assumenda quod illo sit consequuntur repellat reprehenderit similique mollitia! Consequatur, facilis quos accusantium consequuntur aspernatur eum sint?
                        Obcaecati voluptate consequatur quia eum quos officiis aliquid possimus ratione. Autem dolor ut ab rem deleniti beatae cum tempore, possimus consequatur, ratione ea repudiandae cupiditate illo dignissimos vel quod. Culpa!
                        Quae doloribus dolor doloremque necessitatibus tempore impedit dignissimos qui iusto facere explicabo excepturi in ducimus amet officia animi dolore sed suscipit provident fugiat hic, eveniet enim ab esse? Hic, accusantium!
                        Sequi amet deserunt, dolore doloribus architecto exercitationem omnis ratione molestias veritatis quis, saepe quasi fugit, qui blanditiis obcaecati! Necessitatibus, ex nesciunt cupiditate molestiae nihil libero eaque a dolore itaque delectus.
                        Possimus quisquam doloremque quis quasi modi asperiores vitae explicabo earum fugiat, excepturi minus dolor cumque voluptates officiis laborum, quia dicta, ducimus voluptatum nisi maxime vel. Voluptatibus alias nostrum similique voluptates?
                        Voluptate quo molestiae necessitatibus quia perferendis. Itaque atque sed vel. Ab, ut suscipit, error labore voluptas possimus obcaecati distinctio quod totam similique nemo eos et natus sed reiciendis nobis sunt.
                        Obcaecati in reprehenderit consectetur harum officia ad reiciendis provident, ratione, molestiae aliquid aut. Porro tempora error aspernatur distinctio eveniet quidem quia magni modi odit ipsam et veritatis, tenetur, consequuntur eaque.
                        Consequuntur ullam necessitatibus hic beatae nihil molestias esse quia tempora? Assumenda excepturi amet, quibusdam quod ullam, fugiat molestiae magni eum animi, quae quo molestias sapiente! Sunt iste dolores vel quaerat.
                        Accusantium modi eligendi at veritatis autem nesciunt mollitia aut beatae! Ad autem earum placeat labore voluptates neque sequi in ipsum dolores aperiam dolor, consectetur odio quos esse ex distinctio accusamus.
                        Doloremque, aut quam. Repellat maiores doloremque omnis, itaque eum esse placeat, odio officiis suscipit rem enim necessitatibus, inventore beatae amet cumque est libero dolorem tempora! Minus odit aperiam cumque omnis.
                        Quam expedita quis praesentium temporibus quisquam doloribus alias perspiciatis maxime est ea quidem, quod delectus animi, debitis possimus aut aperiam vero enim beatae voluptatum, nulla aspernatur ex. Maiores, est dolore?
                        Asperiores voluptatum accusamus in blanditiis omnis commodi eos reiciendis temporibus, pariatur odio soluta explicabo perspiciatis expedita porro consequatur non possimus nemo, doloremque natus consectetur ratione totam inventore accusantium hic. Veritatis.</Panel>
                        <Panel>content3</Panel>
                    </PanelList>
                </Tabs>
            </div>
               
        </div>
    )
}
export default Profile




    

