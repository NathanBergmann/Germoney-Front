import { Col, Container, Row } from "reactstrap";
import Image from 'next/image'

interface ImgProps{
    src: string
}
function ViewPicture({src}: ImgProps) {
  return (
    <div className="p-5">
    <Container>
      <Row className="justify-content-md-center ">
        <Col xs={6} md={4}>
          <Image src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMSExIVFRUXGBkVGBgXFhcVGBoWGBgWFhYYGRcYHSggGBolHRUVITEhJykrLi4wFx8zODMtNygtLisBCgoKDg0OGxAQGy8mICUvLS8wLS0tLS8tLS8tLS0tLS0vLy0tLy8tLS0tLy0tLS4tLS0tLS0tLy0tLS0tLS8tLf/AABEIAQ4AuwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCAQj/xAA9EAABAwIDBQUFBgUEAwAAAAABAAIRAyEEEjEFBkFRYRMiMnGBB5GhscEUQlLR4fAjYnKC8TNDkrIWJKL/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADYRAAIBAgQDBQgCAgIDAQAAAAABAgMRBBIhMQVBURMiYXHwMoGRobHB0eEGQlLxFDMVI2Ik/9oADAMBAAIRAxEAPwC8UAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBACUBrYTH0qubs3tdlMGDN/r5reUJRtmRFTr06jahJO2jNlaEoQBAEAQBAEAQBAEAQHwlAYvtLZy5hPKb+5Zs7XM5Xa9jQr7fotLhJOXWBN+Q5lSxoTZZhg6skmbtDGMdo6+scfco3FrcglTlHdGcFamh9QBAEAQBAEBwN8sUG4dzDrU7gHT73pHzCs4SnnqLw1OZxbE9jhn1ei9eCIHgcS+g8OYY5cp4A9CuvVpqpGzPIYXFToVM0X+yztk7SZXph7D5jiDyK4dSm6crM91hsTCvDPD/AEbqjLAQBAEAQBAEAQBAEBgxdQtBI4X9Br8FlK7sZiruxG8di/4pI4Gx8lZhC8DoUaTdOzOPhaWkmbz9Vabsjoydkb1Ylpi+snzGg9Pmo4q5FBJr16/R3NhY4vBa4zxHl+irVoKL0Odi6Kg00dgFQFM+oAgCAID4UBXm+GP7SvlHhpy3+4+I/AD0XWwUMsLvmeS43WVWsoL+v1Zxwcwgq6tNTgyRvbA2i6hUmTHEcCOPrqVBiKKqROhw7HSw80+XNevkWVQrB7Q5pkESCuI007M9zCanFSjszIsGwQBAEAQBAEAQAoDj7x4vIwAG7nAekify9VLRjmkWcLTzz15EZxD9fd7rK7FaHUpx0M+EZll3Lut8xqfT5rWTv3RN37vx9eJjeVubrodPZdPsz2tQxaAOnXqq1WWfuxKGJqdp/wCuGviSVhVU5x7QBAEAQHxyArjebBmnXeSIa85gdRJ18r/RdfCTzQtzR4/i+HdOu5W0lr+TjHVXEceSM0aHiFldCJuzzHb3d3uo0XdhWqsYDMZj4TxDjwB68fNcjHdkpXzK57ngGFx1Sk//AFSycn+ObXPRGlv/AIfaA/8AawmMqvoxmLKbgC0c2mmB2jfOSOvDl1VNaxZ6/h1TC37KvTSl1f3vs/l5EC/892jAH2upbSzPicsn1VftZ9Tu/wDi8Je+RfP8kj2D7XqzBlxVIVgPvshjvVvhPpC3hiH/AGObieCU270nbweq/P1LX2Htmji6QrUHhzTrzaeLXDgVajJSV0efr0KlCeSorP1sdBbEIQBAEBjrVA0FxMAXWUruxlJt2RCtq4zta7SbNGg6QT75V6lDLE7GHpZKduZr0qRe4NnUX6ARJ+BUjkkrlhtQVzeqNmIs0WE6R+f5qNO2+5CpZd92fBVa24GZ3PgjUpb6I1cZz0ei+Z6wdF9d9ycoN/y81rOSpqy3NKs4UIWitX6uTCm2AAqRyT0gCAIAgPhQHA3pw8sD/wAJ+Bt+SsYaVp26nN4rTzUc3RkNZg2OBI7rp0NrdOHp811O0a32PLKjCou67Po/s/s/ccXeXAVOyLqVbw3cGvglvHumCY1t11sq2LzTp926+j+B6D+NVMPh8Wo1lCSezdrxfv11252dtdyBukcvMaLz8ouJ9djJS3OpsHeavhHTRfDTd1M3pu828D1EFIzcdiDE4KliY2mtevM294qNHEsdjMK3IRfEUOLCf9xnOmTryJ4StZpS70feiDCzqYeSoVndf1l18H4kUHH98f0URdftHW3Z2/WwdUVKNQNmzg4EscOTmi59LhSU24u6IMVh6deGWav9V5F27p7/ANDFmnScQyu4E5RJbI5OIFzy1srkKiloeWxfDalC8lrHr6+uxMVIc4IAgOLvRXy0wPxOA+v0Cnw8byLeDhmqeSIaH5nk/wBU+tvmFeSsjsxhZHXotygu4vv5N4D1N1D7T8iu3mduS+v6MbnT1WyVjZKxrVqhJyMu426CdJW1kldkiSjHPPYmeycGKVNrRwGvM8T5kyVzpyzO7ODVqOpNzfM31qRhAEAQBAEBr4ygHsc08RCym07o1nFTi4vZldbSolji11iLdPNdmjNTjdHiMZQlRqOLNAtGpCmuypZPchm3sA2jUJH+lU5izX8RN8s6j1FguLjcOqcs39X8n9vA+n/xjjMsVQVCcm6lP4uPLS+ttn7nqyPk8Fyme5i7o94XFOpPD2GCPUEGxaRxaRII6rS9ndGtWnGccsjFVIOYtGUEiBMxraeKwaRTW7uY2hbI2OnsI1u3pjDlwqyMpbrM/LnNombKSF76EOI7Ps32ns8/X08T9H7v4vtMPSd2gqnLlc9pDg57O48yAAe811wArid0eJrRy1GrW8PB6r5HSBWSI+oCE71Y7PXFIaNgH+p/H0sruHjaDkdjA0stJ1Hz+iNLZ+HzOAPhAzv98x6kqWcssfEt1JZIab7I3cRUm515D5LWKtoiGEcqsjVfmPHKOQ1W6JVZG3u9hw6tpZgn+42v8VDiJWjbqVcdUap26kyaqRxz2gCAIAgCAIAUBHtv7LbWkDuvAkHmP8+71VihWdN35HPx2CjiY22ktn69IhGIwz6bi14gj9yurCcZq8TyVahOjLJUVmc6vkfmpPEggSDoWm0j1HpbmFl5Z3hI2hGth1HFUnbXdcmuT817mrrkyC7d2Y7D1OJpu8Lj/wBT1HxXnMbhXQn4Pb8H1r+PcchxCj3tJx9pfdeD+T08+eSqLPTNnweE+YTkRLdnxq3Ri51sHisjCylILxFR+ji0602fhafvHU6WGssSB088ry2Wy8er+3Qs/wBl2120cJWNWpFKmS7TusEC08XOMkNE8/vBTwehxOLUXUrxUFq/n/rr+CwtlYw1aTKhaWF4zZTqAbtB6xE9ZW6dzi1IKE3FO9uZs16wa0ucQABJJWUr7GqTbsiuKbzUqOqnRzi4eWZpC6VrRyno0skFT6L7HP3l3qbhGGhTGauQHOnwsBEsB5mLx5KtUq97Q42O4gqc7R1fLovEgtHfbFtqNc6rmbmlzcjLibgQJFlGq0r6nPp8Rr5k5S06WRLdyN4qmKpvbUg1WES4NiWu0tzkEWjgrFGpm3Otw7FOupZ919CydhYcUwGnxu7x6D9/EqCrLO78iDE1HVlmWy0R3WqEqntAEAQBAEAQBAcvbeEe8MdTfkdTJeLTPdcMp/lJInyW8JJPVaENenKcbxdmtV66dSKYreNj+5Ww4ceMGPUSPqr0MK13oSscOrxWMu5WpX9eK+5G96cOOx+0YelUa6l37ua5pZ99pgkxF/7QtK8qkFmzLNHzXmi9wunhqtR0HTl2dXR6ppP+slq2mn9Tj9rSxlAt0MacWO4H9eKmUqeMpOPP5plKeHxf8fxsalrx2T5SjzXg/Dk1cg7mkEtOoJB9DBXmpxcW0z6/QqqrTU1zVw3wnzH1WpvzZ5at0amw13L3/QKS5gk2xXnEVsLh3CKQe0CmJcD3gXl34nEAy48BAgWUkdSpXXY0qlVe1bfp0t4LkuupflMwFYPGEX3wxpMUh7uZMn5D4q3h42jmOpgKaSdRkc2ptSnhaQcRmMdxumZwIjyFrnkt6k8qbJMZilQpub3eiRVO2Me+o99R5l7yXOPX8uHoqNzybvN5nuzmsHE8fksbiT5E39nGKZSxLQC7O9rhcANsM2lyT3bG3kpaaTdi3w+UO2yu+qt4dfWxduxaFs51dz5LNWWtlyOjiJpyyrZHZaoiufUAQBAEAQBAEB8cEBXm+GyjSeajR3Hm45O4x56rpYSrdZXujzXFsJkl2sdn8n+yLWuHAFpBBB5EQVdks0bHJozdKoqkd07r3bEJoVTh6zm5vCSA4fAnmOY+oBXm80sPVaT25+vmj7A6dPi2Bi5x0kk7P1ut4v7Np6eKqZnvcBGYl0eZmPJVarzTbOthKPZUYU73ypK/krGNmjvJRk3M3NnYJru/Uf2dJvidEuJ/BTb95/wEySApEitVquPdiryfL7vovSPWMxjXuGRgZTaMrGawOJcfvPPE+6AABtc3o03Fd53b3f48CSezuiXY6h0LnHoAx35geqlpblXiksuFn42XzReAfZWDxxB9uYicRUJIhgcT0sG/mr8NKaO9h4qOHjfn+2VPt/axr1C8zl0YOTBoPPiVSnPO7nk8XiZYmq5vbl5fvc4jjmMnQfE8lo2RXsjubP2C5wD6z20Gc6hhx8man1hSRpvd6LxLEMBJrNVkoLx39yJNsGrgaFRtRtOrXc02cSGgczBIHpHqsvKvZ+JmeJweG0opyf8Ak/stPoXVsvEMqU2vpuDmkSCCD6W4qMsRmprNE3whsfUAQBAEAQBAEAQHN29gBWouZxiR5i4W9OeSSkQYmiq1JwfMqrENLHlr6cxwnK4eXA+5dhPMrpnk3CNPuzWvwfrzTIHvIxv2h5ZMGHCdbgT8ZXCx0LVWfU/43W7TAU7crr4P8HOXPZ6JH2lr6LHUwvaR5zkxJmBA6DkFuiNJIy0RdbI3JZuXjezrta0d+sW0A78LHvHaOH80NAHKSeF5olDiNPtKTb2jeXm0tF5dS48diRRoveB4W2HM6NHvgK1COaSR5OlB1aij19Mqbe7aLm0X96XV3Fv9oc7MfLu/FWa8rQsjo8VqqlhVBc7L5Xfy095X1apJAHl+qpHlVGyMmFLge6SI0PEeR4FbRMOpkeZG/Tw15NzzNyslWVRsku7exHV6rKXO5HJo1c7kPnbmsMxTg6s1FF67JwQpUmU26NAAQ7sIKEVFcjeQ3CAIAgCAIAgCAID4QgI5t/YTMS1xbAeCRMcRwPHlfqp6NeVJ+BRxeDhiV0l1/JSm/OyauHrtFRsBze6ZkHKTMH+4dbqLHTjOakuh6L+LU50cNKlPdSv7ml+GRohcySPWxPtE94LXmL6o8cVtHY1lpJo2Ka3Rk7e7bCcVh8uva0z6B4J+EqWG5XxTSw87/wCL+hbW9tfuNpzcy8jowfmR7l0KK3frU8vgId5y93xKY3q2n2lUx4Wy1vlJLviT6AKOrK8jlcRrutiGuUdF7t2cGkLTz+X6qMozfI38LTOq2RUnK5It3dkVcTUyUm9XOOjRzJGnkLlGKVGVWVkXRuru7SwrIZdx8Tz4nH6C+n+Vg7FGhCkrR+JJGhCY+oAgCAIAgCAIAgCAIDUxTC0FzIDvgY0n5T+SyvE0knbTcqL2sbSbXbRaWFlRjnTxEEAHqCCBaExNHLFNPQ6P8exmetOElZpFaFc6R7NHhuoWnMwz1WHeK2iKntGWkt0YJHuRhzUxtBvAOLz5MBd8SAPVSU9ZFPiNTJhpv3fEk+9G2u9XqnRrDTZ/yLW+8mV1muzpnGlbCYTPz39/L7FU4rvFo8yfLj81SPI0nu2e6LZKyiObJDsTZL67obZo8TvoOqkhByJ8Dw+eJlfaPN/ZeP0Ln3PwFOlSFOmLNu483uAInrlyn+5qxNJSsjqThCnJ04KyWnrxJTRYtDQzoAgCAIAgCAIAgCAIAgPFXQoClfaI/tW1HFgY5pkReMtjfnE8FeqUl/x2veczhuMa4pB2td5X687FbZlw5K59PhK+jPhKiZuzJiBceSzE2qcmbGGpEtLzZogTzcdGj0kn9QpURZ0mo8yT+z6uGYlzzqKNUjpAB+QKmoK8ijxOLnRUV/lE5O9mKcRTpt0kudeAANJ97vcujipbI4nH6iSjSvvr9kRwVJHn8v39FTPMuOUkO7uw3VYc6RT58XdG/mpqVJzfgXcBw2WJlnnpBfPwX5JnSxEObhcMwOrGwaPCwcXvPADXmfVWJzjTWVbnZxOLp0F2NK2bpyXi/wAcy0N39mihRZTBLiLucdXON3OPmSfKw4KmzlpWOu0IZPSAIAgCAIAgCAIAgCAID4QgKz3v2Y5lV8tzU33HSdR75XSw01KFjznEKLp1s62et/EqHa+FFOs5g01HSVyMXSVKq0tj6NwLGyxmDjOp7Wq+BpFU2dq+pnfHcLpjjGsdJ0SO+pmpfs047meviy+AGhjG2YwaCdbnxOPF3GOAAAkRDThkV27t7v1y6I3NkVIqtgxIc0kcixwi/PT1U9D/ALEYrwz07X5r5NHG2zi87oHhJgf0z8yppO7ueCr1e2qua0XLy/e7fM2tk4Wm52eq4BjdQLk8mjz+HHgsxS5lekqTleq7RXxfgvydvHbec4ZaY7OnoAPERoB09FLKs2rLRE2K4vVmuzpd2Phv+vcWh7NtgfZqOeoIrVu8RxaweFp95J6mOChtzM4Wi4QzPmT2m1CcyoAgCAIAgCAIAgCAIAgCAIDWxuDbUaWuAIPNZUmndGs4RnHLJXRRftX3fFDE03NNnsNjwLTz4+IKLFVHOSb6Hd/juGVOjOEHopX18V+iCPCptHoXdbmQnuDoVqt0bT/6me4g2mNQYiRzjqpUQqWhsYV/eHmpabtJM1k04NPocxrLFx55R6an3/JTcz5s5cjYwy3IJE13a2YKT2VagBq/7dM3g/iI4kfDVWadFbyO/gOEqNqmI35L8+P0LV3WwrnA1ahlxNr6R+/gta7V8qLGNlFSUI7IlDQq5SPSAIAgCAIAgCAIAgCAIAgCA+FAVT7cHgDDEgH/AFLjxA9yB/Sb+rR6xVlpc7fA6sY1JRvq0tOvj7in6tSeCqnopzuthTMscP3w/NavRmIu9OSM5qTBNzAudTaPcNPIBTPcrU42h69eb5nh5gE+i2juVOIVXSwk5Lfb46XMJp+FgvED1OvxU8TwWrd1zJVsrZJYWsbldXNyPE2i3m8i2c8G+asU4u+i1+h1cFhZQqLKr1Or2h+ZdF/s7uDeBUGGw5L6zyBUqm+UTfpbloPNSynldlq+pcrYnJU7Gk8037Un/Vc/DTktk/EuXZeFbTptY0QAI5+pPEnmqjKZuoAgCAIAgCAIAgCAIAgCAIAgI7tvb1SkcopETo8kHz7vPzVmjRjPdnMxuNqUdIx35v8ABA9qOdWLswLs2pdef0XUhGKjl5HmJ1qrqdpd5uvP9e4r/buxiwksY6IJIymABEmeQkA8pHNcTH4aFOV4aeH4+59J/jnFq+JpZa+vJS8ej890+eq3WvCpO1HRc5xurnp4TtK3gzLTNgt+Zim+5cysMzay3W5Vr0+1oVIdUz1s4OLyQQyNah+6Dxb14CL/ADVqK1PDYe7d08qW8un76W1JDhcU58YbCNLQ7xPPjdzcXcB1/wAKZS/pAuf8yVS2Gwasub5vq30+vJdCxNx9gsouDW3I7z3cSeA6AclvOKpwtzZf/wCNTwdDJHeW75v9Fj0wqpSPaAIAgCAIAgCAIAgCAIAgCAIDn7V2e2q2CBPAxoea3hNxd0Q1qMascsiCbUovpFwcWCLCxzOJ/C3l1MBdGnUU/ZTPO4jBypN55JLyd35L6she+GMrFjWvrfw5gQCOzkFsnLFiCRbgTPJR4mFOMbzjp16ePU6fBq1apPLSqLMlpB6KSXLa3itb6e9QXs4eRr1GnouLWpum3E+g4KvHEKNRq190+T2a87nyjpr++S1vcmpxai7vf1Yyh0NJ6LZasjqy7OjOfg/oesLLgwAG9o5mwVs+duMpS7OOuu3iyd4Gn9jptY0B+JrQA0aydABwaOZ1+VpWox13Z6KCpcNoWfeqS5euS+f0tXdPY5oUhnOaq69R3M8h/KNAq0pOTuyrKcpu83d+vgun5JE1amp9QBAEAQBAEAQBAEAQBAEAQBAfCEBHdo7BpPc972l09TIjlFypo15xSSZUngaNSTlNXuVr7QdhMbh3PpVC5pI7tzBBkiecA2PJb1sVnpOMlqTcK4PKjjY1IvRcnvqrblYU9YPouXKV426Hs6VHJWv1t8evnsvcj1S+pWqJdrnvEGGRxNlLTWpQ4tV7PCNLeWh19l4oYdrS0A1oIBNwzmf6r+iuQmoa8zylKvDBZpWvUe3SK/P+upLvZxgHVcSazpe8XLjfKDYuJ/Ebho8zoL635vcjwsnObq1HeT+Xi/ol08C66LbLUtmdAEAQBAEAQBAEAQBAEAQBAEAQBAcza9QNFyADbvRB6QdfehvBXehUG+9dtN5DSTTeczm55hwPiaJltp961m7LU9Nw6DqQu/aWzty8epXmOphr4BkcDY2Nxp0KqtWZclJySbVjBRPzKwiNXZkqOBc1skdRwVikuZwuOYmF40k9Vq/C5v4KnoBrMAASSTZS2PISV2Xr7P8AYJw2HGbxv77ulrD0HxlLWOph6HZRs9+ZMaaE57QBAEAQBAEAQBAEAQBAEAQBAEB5e6AgOTtOsS0yGx1l3whDaO5We8tBpcTSYxxOpaaeX/6M+khYZ38FOSVqra6Xzfb9lYbSbD3ACL6clTl7R2Kj7pgoDX6efyW0Vc59at2Xe8/Jm0/DicxPkBEq2lZHgauIlWqSkubb+JZns93XbLK9Rve1a0mY0uf5vl8pcuVXe51qGCeHj2lX2nsun7+hbFAKIwbTEB6QBAEAQBAEAQBAEAQBAEAQBAEBr1/NAR/btGq5hiplHECGz5vOg5gX5IWKM4Rlqr+uhFsbs2qW95tMC3i7Ulw5Ek90fFNS3HFUoPRv5WINvdQyjKKVMXnu2iAQRe4BkW6LSa0LlPE0JK7qO/roRJhyDMWxyvIj9ytYRsjz/EsY60+yjK6R2N0KNFpFWq4F5nKDIAOkkxBPy+VqjlTvI34dWwdKTnVlaS2VtPPz+hdW7JaGNgH3c+pWas8zJcRjo4l5o7EroqEgNlqA+oAgCAIAgCAIAgCAIAgCAIAgCAxVQgOZjKZJk+lpjy5nqgd7WRHNtbN7pLqmXWBr5CNB1MLKKlaNo+1YrPenCzZpDpEWAbfmBySUTnQxHZSumRbE4ZrWsF5JMwLRAHoteRtGrKUnI6WysC9wADZAFoBN/RZRVqzvK0btk03G2lVFVlB9VzWuszu0zDuDXZml2U6QCIPwXLODr2qKDe/rnqWzge0Bh+QjgWtLeeoJMac0Oys19ToBDY+oAgCAIAgCAIAgCAIAgCAIAgCA8vCA1MQ6BpJ4Dmhhsim1iXuykjNqSLhjeU8SVsupSrd5258/BEY2rgh2Ty1uhEu4wTFifOLcliTKbw0JQaXx9fAh2JwbC/KRYW6CSPef1WrKlNyjFsn+6OyWtDdS2AbEm7mtNh7wsnSwuGgpuW/7SZu727Gdk+0sb36TxUEROQBk6cQWz70NsfRbj2kN4/T9bk6wD8zGumZAM85uCh0Iu6TNpDIQBAEAQBAEAQBAEAQBAEAQBAEB8KA1MRRlDFjnuwsDTqfNDCiiL70YFxovAN5GUAxfMCSeZOiw9jMIRzXmrrXT3EHxWwKz6ZDWPzOeGy1rtJ7x00Ahayu3scmlQk53tzsWzu3s3JRYIiwty6LdHVjTyaHc7G0IbHuhSDQGjQaIYSsZEMhAEAQBAEAQBAEAQBAEAQBAEAQBAeS1AYK1IQTMDqgITvniqb6D6dN4c8OYTlPAOBNx6KvOvTs0mSxpyWrRz9m9o6QXuFwYzmwIdbXoFvRqXlqR8NVqknPXoWFsqo002AOBIaAb30W0KsJ+y0zeqmpNtczdW5GEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAcna23qdE5PFUico4A6Fx0bPv6KticTGhG736ElOk5vQjOMxVSuf4jrcGizR6cfMry+K4jOq+89OnI6MKMYLQ5+K2MHxBykETxBHEKtTx7g9VdG0o3VjHszYtam9xL2ua60yZAE5QBHIxrwXUhxqjHWz9e8r4agqV2yS02ei4ar97MtCdnQw2Pc2x7w66+9dfCcZqQdqneXzK86EXtodahXa4SD+a9LRxFOtHNB3KcouLszKpjUIAgCAIAgCAIAgCAIAgCAIAgCA4W9W2jh2ta2z6mbKSJADQC46RmuAJtebxBq4yvKjSc4q7JaNPtJ5WRLCAuOZznOJuS4lxPqV4/G4udR953OrCmoLQ6NNsBcxybMs2skRzP8AlYaZruZWhEamSFsYPQC3Wphnl8gSDBFwQpIVpQ78XZrn6+YtfRnb2Xi+0YHGx0IiLr3OAryr0IzmrPnpb4eBz60FCbSNtXCIIAgCAIAgCAIAgCAIAgCAIAgI9vrst1fDk0w01aZ7SnmEguaCI1BEgkTPHlZaVKaqRcJNpPpubRm4PMiC7E3gw9T+G2pDzFnAshtgR3uIvaSvG43hGLo2lKGjvtr9DqwxNKo+6yUUIcBBBBi4uPeuO4STs0bt8zPUqS4/ytJHnb8wpM19TVRsvMzMZoip6GrZ7yrORmtwViVkCOY7br21ewDRUc92RrGkZhI8Tr+GOMWg68O1w7g08ZT7T2UtXJ8/BK2/1I69eFFpbt8ibbDwRpUmsJBPEgRJ53JPx4L1dGjGlBQhsv8AZRnNzlmZ0FIahAEAQBAEAQBAEAQBAEAQBAEB8cJQFY79+zrtXuxGFgPJl9M2a88S06Nd00PTjdw+LcNJEFSlm1RWzxicI9rHdrQc2YEub6jg4dRKuOjhq670YtPwX+yHPVp7No6GB3sxVMvAc1xd3szwXEiGiNYAGUWH1KoYj+O4KvO8k0raJWS+mr8yeHEK0Y238zfbv1jNc1P/AIfqoX/F8Cv8vivwZ/8AI1ei+D/Jv4P2kVA0itRlw0NMgAjqHTH70XMxP8UbqXoySX/1f7FiHEIZe8tfAyUt5sZiTGHwxLdMxDn35yMrG+q2pfxrD01/+ip7kkl5f5B4+b/64+9k03G3PGFDqtTvV3+J2uUfhaTrzJ4ldWvXU7RgrRWyIKdPLq9yZKuSBAEAQBAEAQBAEAQBAEAQBAEAQBAfCEBp7Q2XSrNLKlNr2ng4Bw9xWVJp3Rhq+5C9oeyvCOOamatK8w1wLb9Hgn4q1DG1Y76kUqEWY8P7KcMPFUrO6ZmgfBs/FZljqr6BUInc2duHgqRkUGuPN81P+5IChliKst2bqnFciRUsK1oAAEBQm5nCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA/9k="} alt="não localizou" width={250} height={150}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ViewPicture;