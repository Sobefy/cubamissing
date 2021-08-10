import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    useDisclosure,
    ModalCloseButton,
} from "@chakra-ui/react"


function ModalBox() {
    const { isOpen, onOpen, onClose, } = useDisclosure({ defaultIsOpen: true })
    return (
        <>
            <Button my={8} py={8} colorScheme="red" onClick={onOpen}>Important: Click Here!</Button>

            <Modal size={"2xl"} isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
                <ModalOverlay />
                <ModalContent>

                    <ModalHeader fontSize="2xl" color="red">Important news regarding August 11th</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={2}>Thank you for helping raise awareness about the courageous people who are paying the price for daring to demand freedom and accountability from the Cuban Dictatorship. Now we must do our part. </Text>
                        <Text mb={2}>Choose a detained person and commit to tweeting and creating Facebook posts about them on the 11th of every month until they are all back at home. Our hope is to keep world leaders attention on the real crises in Cuba by making their sacrifice undeniable. Our first request will be directed to His Holiness Pope Francis.</Text>
                        <Text mb={2}>Go to cubamissing.com click on a profile In the search option-search for a person using the STATUS drop down Window Select: En Detention, Confirmed Missing or Whereabouts unknown and Choose a name from the list that hasn&rsquo;t been selected (each profile will have information about the detainee or missing person). From there you can tweet and post their profile on your Twitter or Facebook.</Text>
                        <Text as="em" fontSize="lg" mb={2} color="red">Set a reminder to repeat the 11th of every month.</Text>
                        <Text fontSize="2xl" my={2}>Suggested tweet/post: </Text>
                        <Text mb={2}>@Pontifex I ask that you request that [INSERT NAME] be granted freedom without charges by @DiazCanelB for peacefully protesting for freedom on #11J. #SOSCuba #PatriayVida #cubamissing Be sure to be respectful and tag the Pope Francis (@Pontifex), Miguel Diaz- Canel (@DiazCanelB)</Text>
                        <Text as="em" color="red">And if you like, the leader of your country of residence.</Text>
                        <Text fontSize="2xl" mb={2} color="red">Also please rt when you see others have posted. Stay updated with twitter storms on Miami Freedom Project</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
        </>
    )
}

export default ModalBox