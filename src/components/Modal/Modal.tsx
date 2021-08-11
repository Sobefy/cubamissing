import {
    Modal,
    Image,
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

            <Modal size={"full"} isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image boxSize="100%" objectFit="contain" src="/twitter-takeover-1.jpeg" alt="Twitter takeover"
                        />
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