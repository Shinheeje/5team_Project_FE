// return postUser == nowLoginUser ? (
//     <>
//       <div
//         style={{
//           marginTop: "150px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <DetailWrap>
//           <DetailFirstItemWrap>
//             <DetailFirstItemTitle>
//               {location.state.currentUserInfo.title}
//             </DetailFirstItemTitle>
//             <DetailFirstItem
//               src={location.state.currentUserInfo.imageUrl}
//               alt=""
//             />
//             <DetailBody>{location.state.currentUserInfo.contents}</DetailBody>

//             <DetailBtnWrap>
//               <DetailBtn
//                 onClick={() => {
//                   navigate(`/modify/${pathId}`);
//                 }}
//               >
//                 수정하기
//               </DetailBtn>
//               <DetailBtn
//                 color="#FBE8E7"
//                 onClick={() => {
//                   removeButtonHandler(pathId);
//                 }}
//               >
//                 삭제하기
//               </DetailBtn>
//             </DetailBtnWrap>
//           </DetailFirstItemWrap>

//           <DetailSecondItemWrap>
//             {test &&
//               test.map((item) => {
//                 return (
//                   <>
//                     <DetailSecondItemtext key={item.id}>
//                       {item.contents}
//                       <button
//                         onClick={(event) =>
//                           removeReplyHandler(
//                             event,
//                             item.id,
//                             location.state.currentUserInfo.id
//                           )
//                         }
//                       >
//                         삭제
//                       </button>
//                     </DetailSecondItemtext>
//                   </>
//                 );
//               })}
//             <DetailSecondItemInput
//               type="text"
//               value={reply.contents}
//               onChange={onChangeReplyContent}
//               name="contents"
//             />
//             <DetailSecondItemBtn onClick={onSubmitClickHandler}>
//               등록
//             </DetailSecondItemBtn>
//           </DetailSecondItemWrap>
//         </DetailWrap>
//       </div>
//     </>
//   ) : (
//     <>
//       <div
//         style={{
//           marginTop: "150px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <DetailWrap>
//           <DetailFirstItemWrap>
//             <DetailFirstItemTitle>
//               {location.state.currentUserInfo.title}
//             </DetailFirstItemTitle>
//             <DetailFirstItem
//               src={location.state.currentUserInfo.imageUrl}
//               alt=""
//             />
//             <DetailBody>{location.state.currentUserInfo.contents}</DetailBody>
//           </DetailFirstItemWrap>

//           <DetailSecondItemWrap>
//             {test &&
//               test.map((item) => {
//                 return (
//                   <>
//                     <DetailSecondItemtext key={item.id}>
//                       {item.contents}
//                       <button
//                         onClick={(event) =>
//                           removeReplyHandler(
//                             event,
//                             item.id,
//                             location.state.currentUserInfo.id
//                           )
//                         }
//                       >
//                         삭제
//                       </button>
//                     </DetailSecondItemtext>
//                   </>
//                 );
//               })}
//             <DetailSecondItemInput
//               type="text"
//               value={reply.contents}
//               onChange={onChangeReplyContent}
//               name="contents"
//             />
//             <DetailSecondItemBtn onClick={onSubmitClickHandler}>
//               등록
//             </DetailSecondItemBtn>
//           </DetailSecondItemWrap>
//         </DetailWrap>
//       </div>
//     </>

// const data = useQuery("user", getUser);
// console.log("현재로그인한애!", data.data);
// const nowLoginUser = data.data;

// const postUser = location.state.currentUserInfo.userid;
// console.log(postUser);
