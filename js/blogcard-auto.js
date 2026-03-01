class LinkPreviewGenerator {
    constructor(workerUrl) {
    this.workerUrl = workerUrl;
    this.baseDomain = 'ai-image-journey.com';
    this.BLOGGER_IMAGE_DOMAIN = 'blogger.googleusercontent.com';

    // カスタム画像のマッピング
    this.CUSTOM_IMAGES = {
        // GitHub
        'github.com/easygoing0114': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCVXA9lGHLmQZqpHFx_m1MEfgolO1f8ksTQfLJcHDa5-rH86NWJ-ufv4TgNOAPOMcFfIFEpqBzjV3xPRQ-85oKG-GWDI8zRiUku_ZFtVcOJACWm97gJH_PsadwGx9GujgPRu3RVtBY25qnG0UiTVBzOErzfsEI5Q0ZAnkzkp5odc7BAw/w400-e90-rw/Profile_image_20250824.png',

        // Hugging Face models
        'huggingface.co/bluepen5805/blue_pencil-flux1': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
        'huggingface.co/bluepen5805/anima_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
        'huggingface.co/bluepen5805/blue_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
        'huggingface.co/bluepen5805/noob_v_pencil-XL': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
        'huggingface.co/zer0int': 'https://cdn-avatars.huggingface.co/v1/production/uploads/6490359a877fc29cb1b09451/b-oU9m0-ceQQ1tyt2G_pq.png',
        'huggingface.co/easygoing0114/HiDream_HQ-models': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzPF0z6moB5p4_DSWEE4Rgxn2gAfXnLBfTTNUZksVbIOgZ8Zzv-kYczpyNmvguaadFKJVMS-Fn3RDT01njmbbmo0BdDR5ud7eoinBveD6AVJTXzT6LtuTn2eDoZvECnknSwafftBoebrBjD_MSpvKyswlwNeDumzpveAuOcYpJjDHLTg/w400-e90-rw/HiDream_I1-Dev_clear_anime_compare.png',
        'huggingface.co/easygoing0114/flan-t5-xxl-fused': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcXz7nKUsCisd5moS160_QTJFK5JjGiY6blVSbMlfWgwhAuYYC0xVt3cema6WMQwFDPx8snM5jAdo5ftFGHOFVrJDDQuTmLCn5Zg5HX4_cO9vf4Nl58T04LDVQB8VIMWRnqZfAcSmfDxRKimxmzeRQH9cS7qbldoXOmBhUCnVXuAnWaw/w400-e90-rw/Flan-T5xxl_00020_.png',
        'huggingface.co/easygoing0114/HiDream-I1-Dev_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji_XSe_Vz4JW98Whg3MRvpZprPRvVRZA_erQAYNsg9F8ptC2Jn_JMEb0-y6ZeZBJ96sV28fywJd11NQ5fH3zawPlcn0U6cVPd21en5xDCCGMFU3jtqSy7FFlPgFz416aTf-08DV9srkjv6aktdbSCq3IHGvVhGBwMtXIS11DXFzPfWcQ/w400-e90-rw/HiDream_clear_00012_.png',
        'huggingface.co/easygoing0114/animagine-xl-4.0-opt-clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq9am8PTLvZsx1SIV8haxgOtx6ZB7LmGQxIgJGxXy53a6Wcf7ftqN3ejWn_rF_keOQpxMsdlG98T3t2TvJbCYIwowCKtw5twxRS_gzWI10yICKwadeQ-wiarAhi2fUGPoRjohTZzLddenh9_DcG19gYyJFBCykLvFxUxvCoiiDVIgu5A/w400-e90-rw/Hitman1_close_up.png',
        'huggingface.co/easygoing0114/anima_pencil-XL_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi06BisvxgpRCqjurddi69g8DXd1u51WbRf7_cpFPQJf6aZM_arHXD7QE4cV2mTscWVeTpti0kZYOcy_YSEHKD-Ek-jb7T9FJpB8MuU2o5hUaxGWuS9SNFOb0uCABNNcKvJSUhqbBQ-QE4kfYCjPCZNQxZ-lNdmaHpK-JWFuDKinmbnZw/w400-e90-rw/anipen_clear_00186_.png',
        'huggingface.co/easygoing0114/Qwen-Image-Edit-2509_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9hEIUyFPYL9zXXEAzP3xFi2l5F0dvgFjEdpayfPVYCvIC46fRvrUBD4VfAcAm7sLnc4Uqz3F42LD4Yw4__p0u2SZrVPKqn1d8pCXL-v-bxzOCbxoWfwIagDTgCFk5zLTACxWHkzfSiqAszB8XhJKZtyNzM4Rb9YJ5HhFm2FMqD9VILQ/w400-e90-rw/Qwen-Image-Edit-2509_clear_anime_kimono.png',
        'huggingface.co/easygoing0114/mellow_pencil-XL_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4LiAxXCKnjrgG-uAWE2QEqdxd7WokhSETWAoz-WVpDXX0EP9UaHuAqWwOZjV53FMdn6kJwbVGcsc6ZOErzA-4TGnj5hKeHge5E-xecyJdcRY9kO4tqoFn9DOANBQVHi5dLlRHrNSHNHZNQKByAGNOtx85cR04J05rcSQgAzt30Diw6A/w400-e90-rw/mellow_pencil-XL-v1.0.0-base_clear_upscale_square4.png',
        'huggingface.co/easygoing0114/SDXL_anime_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi5w8U9Gl8JLLsUqXv6P4otxRNobob2NK-vW93mtPVrH1pQU0EJUtnQi6IlXknjo3q1QMTPZZZpTpD2cAr-K6C1Q0O1RfTcL-KkPrFC6DfvLc0t2F6DFz_Jus5lvannJBM6AjvW7EyNJR4FH0qbpZv6Z23_gTA8D7r3RnynebDDikldA/w400-e90-rw/mellow_pencil-XL-v1.0.0-base_clear_00660_.png',
        'huggingface.co/easygoing0114/Z-Image_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_RktUvKxwH_tr3WsKf_SrOXe2ZOwYlrL8dk69e_TBI3fKU6kNA1dKtroSUZQfo11uS-vZOZkdyGfJEB35nGTh1qDJZ_L6Zkb0rGQaf9oiDO1bpi-Q5vYJ0_1FAEYf9LNG80MSHWOk9ouIcQBzrIetcjNyZz6vNSFHV6M-UCBqSPQLag/w400-e90-rw/Z-Image-Turbo_clear_vivid_vae_photo.png',
        'huggingface.co/easygoing0114/Z-Image-Turbo_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbRZWjOvWuNSND5imJe4tTbU2-v5JkDfbQIkxHJr7RoockZXZnzqF0uUQxK8U-LpBZwtVjAP7UeNS9-w7xZgkXR7DDhSXZ319Fcb9WKH-7o_B6p30A05mhVhBq31xJa4iwCn9myfZ_EBL01HCz65x6-m7CCMTua2uciASEDEmZfWhgYw/w400-e90-rw/Z-Image-Turbo_FP32_clear_vivid_vae_photoreal.png',
        'huggingface.co/easygoing0114/animagine-xl-3.0_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHyjrGmoBb0ZeYgIuCJJouC3iUYvOROj-HSGQXUb8jT8kOoR6aCYVp_NCdHFoidd_Cor_xOfFIsnShe1-4g6SxuXH5bfkq0H3gUDqw2Hl986GQ_s0-vp5LiIXWmIJ4FhwDs95iHito6rBSjeTGuCMrTo2nV52-AUqwUTU7iqbczh2M6w/w400-e90-rw/a%20female%20animated%20character%20with%20blue%20hair%20and%20blue%20eyes%20wears%20a%20black%20outfit%20with%20gold%20embellishments%20and%20a%20fur%20collar%20square.png',
        'huggingface.co/easygoing0114/qwen_image_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeQC5AeEaC1CXr9sqdIaWrJMTQKkzHnxSRkSwVW-VpBel35PvAA5RdTX_abc4IxGqPGYw059PiqDjqROwpbXWbNDAZtiIszEjN3QiSTB8bPh5RNZtVgT08v8C7l2amiP-SQQ2M0UQzsY8QraTTWMDHvH51QN-Z3PKlpbTh0PhLvHrfXQ/w400-e90-rw/clear_vae.png',
        'huggingface.co/easygoing0114/Qwen-Image-Edit-2511_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLa46YF4wGAYIDbvgU3CHqKDG8RlvpXev-FrnltBFyYwnGqqtweyoan2Zr2Ii_4CjsDffvJcZc5bQb-jHFpYOj-rVxJqRUu0HufV70cy_y_Mc43N41uGNy-nl7X4My16fm7nSqpfKQkSCsEqkMMqyHw3JagdgaCvZmqGak0_X_EnTmmA/w400-e90-rw/upscale_00053_.png',
        'huggingface.co/easygoing0114/FLUX.2-klein-4B_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCGjlcmcry8meWHFykKbxjytK79sbEwD_rrsVLxHameG8oq2sO5wC47RnQtyDM02Jlo1bO7hnHChhN18XWACFBcORLBAOxh9E3zB5PPYWrdFw8pdakA8YqTq0wDH21XReGzE-fAHaKtYkmA7bZEvmNRypnEyu-Nw_vLeuUYEEyY6Gpqg/w400-e90-rw/upscale_00087_.png',
        'huggingface.co/easygoing0114/Z-Image_clear_photoreal': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0d6j23FOhiHS1CwrxOo8UvsHAZMKJ4Ryxiu_t4ZlwqQzRjPMyrL-X91HiN5_pRtfCuC8HHddGvfc4KPTxz8EvOmD03LKGTzh6GfHV8NijdMntkqUYNfJ88ERrqatvXgvJYh83OPtXrFA5p_ShReSwBufZov6zS_H-lCvF24mx_vZt0Q/w400-e90-rw/Z-Image_clear_photoreal_upscale_10.png',
        'huggingface.co/easygoing0114/Z-Image_clear_anime': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8LlBvKQrZnRh5mVoC97GMC6jcb9aNTQHHGSNOK0jXHUbGItwK3wPRQDXSspiq1xRvU7b3kWQgJmOLR5bz4FYgjWUPrrki5YjTNMedyZJjegAPG7eamggVgfm5bALSSujw2BtWVwyldDaHz_tvqMeWbRT891eQ3ELH55vlTYOzIryCRg/w400-e90-rw/FP32_upscale3.png',


        // Civitai models
        'civitai.com/models/722776': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
        'civitai.com/models/261336': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
        'civitai.com/models/119012': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
        'civitai.com/models/674457': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b5674e66-26cb-45ec-9e82-c19a2dd9753d/ComfyUI_00262_.jpeg',
        'civitai.com/models/260267': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b50708a9-a0a2-4a62-a688-cbd15abb65e4/image%20(24).jpeg',
        'civitai.com/models/1027203': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
        'civitai.com/models/1188071': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/44382db0-b992-4058-b8b1-369a58cc2604/animagine-xl-4.0-opt.jpeg',
        'civitai.com/models/1356520': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnwPTigmuL8PCTQ0LYH3psdmMJrjX5E6airywZe7ZAUqKzjscylMiyKIlCFx4K3p5Icx7vOb7pXDxohMMXChooPYvgadslw2qQs-N_qQD8cEW_haXr-rbLhUotCNHxUSIKkJ9JDmf8J3qMU6qjnt0S8R0sT0JG844K5bnm8Bc2Lip33T4/w400-e90-rw/Flux1_euler_Anime%20Illustration%20of%20%20A%20young%20girl%20holding%20a%20chalkboard%20that%20says%20flan%20t5%20and%20te-only.png',
        'civitai.com/models/2081436': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9fqSstgwxA4AkoQyBpCIxnHeNFDMZbxxyioegihg1-8ihZEI0JHC47fdOxz3rglkOf0sqHzybeduzUiYHxJFpNmIlYS0oGnO51Og6Yakr9BNCaydUEvAjaNkQhPFg51910P5XSQdkS1t62JsxwaOe1woz-RWE0XyAn25K1W8f_bkb4g/w400-e90-rw/HiDream_I1-Dev_clear_anime_compare.png',
        'civitai.com/models/2110148': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix1Z4fRSVlZ6sYPVo00fSFG16mokYEd9zLXK9wgCWOl56kOqE6Lhxrf55T9JRbT9zDpXwpEWRd-4Uw48-6AcGFvPAmdM82fXyJMSMUwShoOPaXeFxz4Yk-qnENi37oi9O2tA_1uIbgxTFRYP0lImzUNC98Kwjk02CuXHd1y82ojvxMog/w400-e90-rw/Upscale_Detailer_color_correct_00036_close_up.png',
        'civitai.com/models/2130524': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBWz6GckEdtrHg2vdLCq5T6yUfO305n0iTOUvp7I2xEHi5hXtLJwKgRk7FtK7Ulh_UXxMRJ2VPV8Hmq-8E4f6hpMgmVyCcSH7h4uUAPiyUIRzxqxMF8xfsOzeFbJC5fnoN4TwXNTghJIcR8x_0JsoqI7wgLWxSvzn81JZBcsHVjBZV3Q/w400-e90-rw/anipen_clear_00118_.png',
        'civitai.com/models/2143257': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheBuAqh9OA5Tfi9iB1XL6Q-yop8bxArkTYDdU3hhFM2cPjoOVdYtGLOHuzLbrheQtkJnVLk85Wti1a5mXGptBLJLK3HYXPWEWxEhq8vAVeYl8Yb8wZwHvVqlb_HZl7sccoiNI0_Vuq5_4z_0njJZO7GB-jyI8FHAaHck71m1cub1ChBg/w400-e90-rw/Qwen-Image_original_vae_photoreal_close_up.png',
        'civitai.com/models/2177495': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVYD44mmA9L2NhhMhad3uIl0mrwxI0SOstiiM_MqHdzhGdU7XAL44K2atvl_HPsF2J99WqXDRxVsvmeC0yVYrY0Y5nctlVc-SRCnJ-sSBnz93TN6KeXvFbvCBJg3ES4sea9cwMR8YvHvA2xmVxZnmxAmzduoVWqP_GQT3IA7xblH2R0w/w400-e90-rw/A%20little%20girl%20happy%20riding%20a%20sled.png',
        'civitai.com/models/2191617': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsr_6FK-zahN4VT6pWn_xf_RGizw5EqwTFMvfpVMBIwJlnD6SaxfyO73K5AulFuy7ybGdlAT0uYv0QIhyphenhyphen6VODD7rOqZx1JxXfoBnsqva9z4R0zOZcEKAQeCKjqrM5T0Yl3nisKhkeZ73TCnKjn7iQDR74AGC8l0Kwyqle-F6ITPp56-Q/w400-e90-rw/Z-Image-Turbo_clear_vivid_vae_upscale_2.png',
        'civitai.com/models/2197598': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyu8Mmv6ABAr0ggVhdlck5Ybs_SbtIgmGuShggKoyO72Pn6nvMNCWI2h3v7E1s6_E9TizS6XL4CQPFHPFtWb6-kVRRIJiU0lSLna946PHlSnzUvEAunQUIdLxwzH1AAwo8qKrJNHlyBE_jE3UP0oadgVsg55EEhGe2fobGyZ6vro269g/w400-e90-rw/Z-Image-Turbo_FP32_clear_vivid_vae_anime.png',
        'civitai.com/models/2241280': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicmkPXX7yy9v0QMgFiVRaMnVFlfPvqBnWApSAhixws4F0SX0XY83kZMDB0rV3_qrnokrfSycSuaBQSJkESITwYdZMYmXM7NI8VN4dXdvD9r0b__WXUU7tLSBVBb7vOekPXZaZq7odGRRv6ZG7HPi_Ya1N-ngZuXXmFqIXFlHClh96Mqg/w400-e90-rw/Chef%20square.png',
        'civitai.com/models/2171491': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUDEOB0Eofke7RkB3VKHo6JZ5negs-2jDDI2EdekHs6T5A86YYXHmh4vO1rgvNxn1W0duXnsHFjSFzsthlNSMxzZQ19mSg7llh53CMYEF2ezfqE9_jPetI354SDn2dV4gnVnRH55Wdh40qOvpsNsKw1DbNgnvRdPzE58gYgtCVlUXnOw/w400-e90-rw/mellow_pencil-XL-v1.0.0-base_clear_00665_.png',
        'civitai.com/models/2151326': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9B-60FkOLypjay6LXo88IgPU_QeuIfX61iPVnRJL05RAMfc9Rsatnd4ak37yqx_9QKzdRPR2j5S4SUtJsUI4F5Cy9ZBeBIO2kWExPIqTfGiHraI9NvgII1vgBqAiLDhvJnOLX3zFfIFYEeLr59NWwuTkpPWZO7csWAf1ZiStuBJhW4g/w400-e90-rw/Qwen-Image-Edit-2511_clear_clear_vae_00022_.png',
        'civitai.com/models/2285329': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIKaqyQStmoZcSq-LbwaJphPB6qPU6CkBLniCyMtD58d8pstUitT0MbnpzbvCEZNf0qSs57psNiIfnq6ZkRPc5AWtf9iPDb94y0QNQfINAWx3xM27CJgKZdkkCQ64Kq6grRIix9H5TYU84HaOkN1qukonoha5bhQd8L4gyxLCyXShBGw/w400-e90-rw/upscale_00006_.png',
        'civitai.com/models/2341785': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiA5Ny8bB8hXvL8OjygWgufDqkEMeClRpC7tA5LPxIEl78WESh9wRaq5ZipPY0yNG-cxNXRVarPFtM0fykaxVPCIPZSr0g7vwffVv9s6tDC-AvU0WVznaQWcHLkbX7MmFwECMRVUcX285q8laPidtPX4qQtQ7zUn92UAOn5Fyy-S06wag/w400-e90-rw/flux-2-klein-4b_clear_cover_image_photoreal.png',
        'civitai.com/models/2369132': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_H0SCgJ7FonGdrFn2XrTOW4qUQ33M52bwkhWoE_Atz_MfhcYI6sXnZCtY0QUDYDI12oh_Rz-8erxwpjzmMAEGxi8r6OAZ7ISJnHpDNWaaV_uUhx8Y_QTmHZTdDjLPPDCno2-iIbbo9Hu6Uh6AOkNabn2zbsNRUh0UiRQvh4phrebIiQ/w400-e90-rw/Z-Image_clear_photoreal_upscale_9.png',
        'civitai.com/models/2396290': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg89Su6R0sE_sqQOjlWuePK1S8HoUq1YikbOQKSEsSKH8kfogSn0kMhEWWK5vlb9Ul5YwoyKbCAOEqIaBomFXuGROj6xbB4HuvuVYmlTyHeNc00tMUTekKn3UP5fRlHL06twLFW0yMAhVbBL4XxM1vtb4uiggVAghNkr0iOwajqb7Nd1w/w400-e90-rw/FP32_upscale2.png',
    };

    // デフォルトのCivitai画像
    this.DEFAULT_CIVITAI_IMAGE = 'https://files.ai-image-journey.com/images/logo/civitai-color%20400.webp';
    }

    // カスタム画像を取得する関数
    getCustomImage(url) {
    try {
        const urlLower = url.toLowerCase();

        // URLからモデルIDを含むパスを抽出
        for (const [path, image] of Object.entries(this.CUSTOM_IMAGES)) {
        if (urlLower.includes(path.toLowerCase())) {
            return image;
        }
        }

        // Civitaiのその他のページ用のデフォルト画像
        if (urlLower.includes('civitai.com/models/')) {
        return this.DEFAULT_CIVITAI_IMAGE;
        }

        return null;
    } catch (error) {
        // console.error('Error getting custom image:', error);
        return null;
    }
    }

    // メタデータから画像URLを取得する関数
    getMetadataImage(metadata) {
    if (!metadata) return null;
    return metadata.thumbnail ||
        metadata.ogImage ||
        metadata.twitterImage ||
        metadata.firstImage ||
        null;
    }

    createCardHTML(metadata) {
    const isInternal = this.isSameDomain(metadata.url);

    // 1. まずカスタム画像を確認
    let imageUrl = this.getCustomImage(metadata.url);

    // 2. カスタム画像がない場合のみメタデータの画像を使用
    if (!imageUrl) {
        imageUrl = this.getMetadataImage(metadata);
    }


    // 画像URLのパラメータ変換処理
    if (imageUrl) {
        imageUrl = imageUrl.replace(/s1600|w0-e90-rw|w800-e90-rw|w1200-e90-rw/g, 'w400-e90-rw');
    }

    const linkClass = `blogcard-link${imageUrl ? '' : ' blogcard-link-no-image'}`;

    const imageHTML = imageUrl ? `
        <div class="blogcard-image-container">
            <img class="blogcard-image" src="${imageUrl}"
            alt="link page thumbnail image" width="400" height="400" />
        </div>
    ` : '';

    return `
        <figure class="blogcard blogcard-auto">
        <a class="${linkClass}" href="${metadata.url}"
            ${isInternal ? '' : 'target="_blank" rel="noopener noreferrer"'}>
            ${imageHTML}
            <div class="blogcard-content">
            <p class="blogcard-title">${metadata.title}</p>
            <blockquote cite="${metadata.url}">
                <p class="blogcard-description">${metadata.description}</p>
            </blockquote>
            ${isInternal ? '' : `
                <div class="blogcard-footer">
                <img src="https://www.google.com/s2/favicons?domain=${metadata.domain}"
                    alt="Favicon" width="16" height="16" />
                ${metadata.domain}
                </div>
            `}
            </div>
        </a>
        </figure>
    `;
    }

    createFallbackCardHTML(link, url) {
    const linkText = link.textContent.trim() || url;
    const customImage = this.getCustomImage(url);
    const linkClass = `blogcard-link${customImage ? '' : ' blogcard-link-no-image'}`;

    const imageHTML = customImage ? `
        <div class="blogcard-image-container">
            <img class="blogcard-image" src="${customImage}"
            alt="link page thumbnail image" width="400" height="400" />
        </div>
    ` : '';

    return `
        <figure class="blogcard blogcard-auto">
        <a class="${linkClass}" href="${url}"
            target="_blank" rel="noopener noreferrer">
            ${imageHTML}
            <div class="blogcard-content">
            <p class="blogcard-title">${linkText}</p>
            </div>
        </a>
        </figure>
    `;
    }

    // メタデータを取得する関数
    async fetchPageData(url) {
    try {
        const response = await fetch(this.workerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
        });

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.status === 'success' ? data.metadata : null;
    } catch (error) {
        //        console.error('Error fetching page data:', error);
        return null;
    }
    }

    // 単一のリンクを処理して即座に表示する関数
    async processLink(card) {
    try {
        const link = card.querySelector('a');
        if (!link) return;

        const url = link.getAttribute('href');
        if (!url) return;

        let metadata;
        try {
        metadata = await this.fetchPageData(url);
        } catch (error) {
        metadata = null;
        }

        const cardHTML = metadata ? this.createCardHTML(metadata) : this.createFallbackCardHTML(link, url);

        // 完了したら即座にDOMに反映
        card.insertAdjacentHTML('afterend', cardHTML);
        card.remove();
    } catch (error) {
        //          console.error(`Error processing link: ${error.message}`);
    }
    }

    // 並行処理でリンクを置換する関数（0.5秒間隔で開始）
    async replaceLinks() {
    const blogcards = document.querySelectorAll('.blogcard-auto');

    // 0.5秒間隔で処理を開始し、完了次第表示
    const promises = Array.from(blogcards).map((card, index) => {
        return new Promise(resolve => {
        setTimeout(async () => {
            await this.processLink(card);
            resolve();
        }, index * 500);
        });
    });

    // すべての処理が完了するまで待機（表示は各々完了次第行われる）
    await Promise.all(promises);
    }

    isSameDomain(url) {
    try {
        const urlDomain = new URL(url).hostname;
        return urlDomain === this.baseDomain || urlDomain.endsWith(`.${this.baseDomain}`);
    } catch (error) {
        return false;
    }
    }
}

// 実行
const generator = new LinkPreviewGenerator('https://get-blogcard-info-to-blogger.easygoing0114.workers.dev/');
generator.replaceLinks();