import { ITextService } from "./ITextService.service";
import { Observable, of } from "rxjs";
import { Text } from "src/app/minigames/textai/models/text.model";

export class textService implements ITextService {
    readonly texts: Text[] = [
        {
            title: 'Majestic Giants: Discovering the Wonders of Elephants',
            text: 'TestText',
            category: 'Test',
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
}