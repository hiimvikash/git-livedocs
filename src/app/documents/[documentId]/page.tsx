interface DocumentIdPageProps {
    params : Promise<{documentId : string}>
}
import { Editor } from "./editor";


const DocumentIdPage = async ({params} : DocumentIdPageProps) => {
    const {documentId} = await params;
    return ( 
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor/>
        </div>
     );
}
 
export default DocumentIdPage;