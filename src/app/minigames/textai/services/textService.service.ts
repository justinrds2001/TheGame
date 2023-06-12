import { ITextService } from "./ITextService.service";
import { Observable, of } from "rxjs";
import { Text } from "src/app/minigames/textai/models/text.model";

export class TextService implements ITextService {
    private used: number[] = [];
    readonly texts: Text[] = [
        {
            title: 'Shark Finning: Threatening the Existence of Magnificent Marine Predators',
            text: 'Sharks are a type of fish that are known to live in salty water, except for the bull and the rivers sharks which can live in both salty and fresh waters. They are large animals at the top of the food chain, which means that they have limited predators feeding on them. They come in various species and are a sister group to the rays. Although sharks are not very harmless to human beings, research shows that only 12 people are killed by sharks every year, while human beings kill a worrying 100 million sharks annually, the marine animals are facing extinction if something is not done to protect them. This essay explores sharks and the risks they are facing in the hands of human beings, and includes a case study about the same issue. Sharks are amazing marine animals which have all the features of fish, including a cartilaginous skeleton and dermal denticles which protect them from mechanical damage to their skin in addition to enabling them to swim properly. Common species include the hammerhead, great white, blue, tiger and mako sharks. These marine animals are apex predators. This means that they are at the end of the marine food chain and are preyed on by only a few organisms. Another interesting fact about sharks is that the marine animals, anciently know to mariners as ‘marine dogs’ have replaceable teeth. They occasionally shed their teeth which people use as cheap souvenirs. Although research evidence shows that someone is more likely to be bitten by a fellow human than a shark, humans continue to kill the animals for commercial or sporting purposes, threatening their population. The sharks can inflict lethal bites, with the tiger shark and the great white being some of deadliest species. Shark fin soup is a popular delicacy in China and is served in important occasions such as weddings and other social ceremonies. While previously fin soup was a preserve of the rich, the increasing economic power of the people means that more and more people can afford it. However, this comes at the cost of decreasing shark population. Research indicates at the current rate of shark population decline, a majority of the species could be extinct in 30 years since finning causes up to 100 million shark deaths annually. While in the United States there is a specific law (Shark Finning Prohibition Act) that restricts shark finning and calls for international initiatives to ban the practice, there is a lack of a strict monitoring and control program for finning and international shark trade globally. One of the obvious effects of a declining shark population is the disruption of the ecological balance, especially seeing that these marine predators are at the top of the marine food chain. For example, when shark numbers decrease, their prey multiply and in turn wipe out species lower in the food chain, with far reaching consequences on the marine ecological balance. Taking initiatives to ban finning and trade of shark products can go a long way in protecting these marine animals from extinction. In conclusion, sharks are amazing marine animals sitting at the top of the underwater food chain. Although some shark species are capable of inflicting lethal bites, sharks are essentially less harmless than most other marine and land animals. Human activities are threatening the big fish’s population, which could lead to an impact on the ecological balance in the marine environment. It is imperative that finning and other human activities that put sharks at risk are banned or, at the very least, regulated to protect the marine animals from extinction.',
            category: 'Animals',
            createdBy: 'Human'
        },
        {
            title: 'Majestic Giants: Discovering the Wonders of Elephants',
            text: "Elephants, the largest land mammals on Earth, have captivated human imagination for centuries. Known for their immense size, intelligence, and social structure, these gentle giants hold a special place in our hearts. In this article, we delve into the fascinating world of elephants, exploring their physical characteristics, behavior, and conservation efforts. Elephants are truly remarkable creatures, characterized by their unmistakable trunks, elongated tusks, and large, fan-like ears. Their trunks, which are versatile appendages, are used for a variety of tasks, such as grasping objects, socializing, and even spraying water. African elephants are the largest of the two species, standing up to 13 feet tall and weighing around 12,000 pounds, while Asian elephants are slightly smaller. Their tusks, which are elongated incisor teeth, serve several purposes, including defense, digging for water, and gathering food. Elephants possess complex social structures, living in tight-knit family groups called herds. Led by a matriarch, these groups consist of related females and their offspring. The matriarch's experience and knowledge guide the herd's movements and decision-making processes. Male elephants, known as bulls, usually live solitary lives or form temporary bachelor groups. Communication among elephants is multifaceted, involving vocalizations, body postures, and infrasonic sounds that can travel long distances. Elephants are highly intelligent and exhibit a wide range of emotions. They display empathy, compassion, and even mourning behaviors when a member of their herd passes away. Their memory is exceptional, enabling them to recognize individuals and remember locations of vital resources such as water and food. Unfortunately, elephants face numerous threats, including habitat loss, poaching for ivory, and conflicts with humans. In response, dedicated conservation organizations and governments around the world have been working tirelessly to protect these magnificent creatures. Efforts include the establishment of protected areas, anti-poaching patrols, and community-based conservation initiatives. International agreements, such as the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES), have been instrumental in regulating the trade of elephant products and preventing the illegal ivory trade. Education and awareness campaigns have also played a crucial role in promoting conservation and reducing demand for ivory. Elephants are awe-inspiring animals that capture our imagination with their size, intelligence, and social complexity. Through conservation efforts and public awareness, we can ensure the long-term survival of these majestic giants. Let us continue to appreciate and protect these gentle creatures, ensuring that future generations can marvel at their magnificence.",
            category: 'Animals',
            createdBy: 'Ai'
        }
    ]

    getTexts(): Observable<Text[]> {
        return of(this.texts);
    }

    getRandomText(): Observable<Text> {
        let allUsed: boolean = false;
        //Keep randomly selecting texts until all are used
        while (!allUsed) {
            let randomNumber: number = Math.floor(Math.random() * this.texts.length);
            if (!this.used.includes(randomNumber)) {
                this.used.push(randomNumber);
                return of(this.texts[randomNumber]);
            }
            if (this.used.length == this.texts.length)
            {
                allUsed = true;
            }
        }
        //When all texts are used tell the user and reset the used array so they can play again in the same tab.
        this.used = [];
        return of(new Text("All current texts viewed!", "You have currently viewed all available texts written by humans or A.I.! Try again with the same texts or wait until more are added.", "Information", "Human"));
    }
 
}